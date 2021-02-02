import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useRef, useState } from "react";

import { ButtonInput, EmailInput, PasswordInput } from "../../components/Inputs";
import SocialLogins from "../../components/SocialLogin";
import { createUser } from "../../firebase/client";

const SigninPage: React.FC = (): JSX.Element => {
  const Form = useRef<HTMLFormElement | null>(null);
  const [InputError, setInputError] = useState<string | undefined>();
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Elements = Form.current?.elements;
    if (Elements) {
      let email: string | undefined;
      let password: string | undefined;
      let confirmPassword: string | undefined;
      for (const element of Elements) {
        const Input = element as HTMLInputElement;
        switch (element.id) {
          case "email":
            email = Input.value;
            break;
          case "password":
            password = Input.value;
            break;
          case "confirm-password":
            confirmPassword = Input.value;
            break;
        }
      }
      if (email && password) {
        if (password === confirmPassword) {
          createUser(email, password)
            .then(() => setInputError(undefined))
            .then(() => router.replace("/login"))
            .catch((message) => setInputError(message.message));
        } else {
          setInputError("It is not the same password!");
        }
      } else {
        setInputError("Password Error!");
      }
    }
  };

  return (
    <main className="h-screen w-screen justify-center items-center flex">
      <div className="min-w-max max-w-96 p-8 border-gray-300 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form ref={Form} onSubmit={handleSubmit}>
          <EmailInput />
          <PasswordInput error={InputError && InputError} />
          <PasswordInput
            error={InputError && InputError}
            name="confirm-password"
            placeholder="Confirm password"
          />
          <ButtonInput>Register</ButtonInput>
        </form>
        <span className="mt-4 flex justify-center text-gray-500">
          Or continue with these social profile
        </span>
        <ul className="my-4 flex justify-center">
          {SocialLogins.map((Social, i) => (
            <li key={i} className="mx-4">
              <Social />
            </li>
          ))}
        </ul>
        <div className="my-4 flex justify-center">
          <p>
            Already a member?
            <Link href="/login">
              <a className="ml-2 text-blue-500 border-blue-500">Login</a>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SigninPage;
