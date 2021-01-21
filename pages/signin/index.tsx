import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiOutlineGoogle,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

import Input from "../../components/Login/Input";
import SocialLogin from "../../components/Login/SocialLogin";
import { loginWithGitHub } from "../../firebase/client";
import useUser from "../../hooks/useUser";

const SigninPage: React.FC = (): JSX.Element => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace("/home");
  }, [router, user]);

  const handleClick = () => {
    loginWithGitHub().catch((error) => console.log(error));
  };
  return (
    <main className="h-screen w-screen justify-center items-center flex">
      <div className="w-4/5 h-3/6 p-8 border-gray-300 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
          <Input Icon={AiOutlineMail} name="email" placeholder="Email" type="email" />
          <Input Icon={AiOutlineLock} name="password" placeholder="Password" type="password" />

          <button className="bg-blue-500 text-white w-full h-12 mx-auto">Login</button>
        </form>
        <div>
          <span className="mt-4 flex justify-center text-gray-500">
            Or continue with these social profile
          </span>
          <ul className="my-4 flex justify-center">
            <li className="mx-4">
              <button>
                <SocialLogin Icon={AiOutlineGoogle} />
              </button>
            </li>
            <li className="mx-4">
              <button>
                <SocialLogin Icon={AiFillFacebook} />
              </button>
            </li>
            <li className="mx-4">
              <button>
                <SocialLogin Icon={AiOutlineTwitter} />
              </button>
            </li>
            <li className="mx-4">
              <button onClick={handleClick}>
                <SocialLogin Icon={AiFillGithub} />
              </button>
            </li>
          </ul>
        </div>
        <div className="my-4 flex justify-center">
          <p>
            Already a member?
            <Link href="/">
              <a className="ml-2 text-blue-500 border-blue-500">Login</a>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SigninPage;
