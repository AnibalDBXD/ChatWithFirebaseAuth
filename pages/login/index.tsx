import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { ButtonInput, EmailInput, PasswordInput } from "../../components/Inputs";
import SocialLogins from "../../components/SocialLogin";
import useUser from "../../hooks/useUser";

const LoginPage: React.FC = (): JSX.Element => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace("/home");
  }, [router, user]);

  return (
    <main className="h-screen w-screen justify-center items-center flex">
      <div className="w-4/5 h-3/6 p-8 border-gray-300 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
          <EmailInput />
          <PasswordInput />
          <ButtonInput>Login</ButtonInput>
        </form>
        <div>
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
        </div>
        <div className="my-4 flex justify-center">
          <p>
            You aren&quot;t a member?
            <Link href="/">
              <a className="ml-2 text-blue-500 border-blue-500">Login</a>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
