import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

import { ButtonInput, EmailInput, PasswordInput } from "../../components/Inputs";
import SocialLogins from "../../components/SocialLogin";
import { loginUser } from "../../firebase/client";
import useUser from "../../hooks/useUser";

const LoginPage: React.FC = (): JSX.Element => {
  useUser();
  const Form = useRef<HTMLFormElement | null>(null);
  const [InputError, setInputError] = useState<string | undefined>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Elements = Form.current?.elements;
    if (Elements) {
      let email: string | undefined;
      let password: string | undefined;
      for (const element of Elements) {
        const Input = element as HTMLInputElement;
        switch (element.id) {
          case "email":
            email = Input.value;
            break;
          case "password":
            password = Input.value;
            break;
        }
      }
      if (email && password) {
        loginUser(email, password).catch((error) => setInputError(error.message));
      }
    }
  };

  return (
    <main className="h-screen w-screen justify-center items-center flex">
      <div className="min-w-max max-w-96 p-8 border-gray-300 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form ref={Form} onSubmit={handleSubmit}>
          <EmailInput />
          <PasswordInput error={InputError && InputError} />
          <ButtonInput>Login</ButtonInput>
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
            Don&apos;t have an account?
            <Link href="/login">
              <a className="ml-2 text-blue-500 border-blue-500">Register</a>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
