import Link from "next/link";

import { ButtonInput, EmailInput, PasswordInput } from "../../components/Inputs";
import SocialLogins from "../../components/SocialLogin";

const SigninPage: React.FC = (): JSX.Element => {
  return (
    <main className="h-screen w-screen justify-center items-center flex">
      <div className="min-w-max max-w-96 p-8 border-gray-300 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form>
          <EmailInput />
          <PasswordInput />
          <PasswordInput placeholder="Confirm password" />
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
            <Link href="/signin">
              <a className="ml-2 text-blue-500 border-blue-500">Login</a>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SigninPage;
