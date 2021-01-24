import { AiFillGithub } from "react-icons/ai";

import { loginWithGitHub } from "../../firebase/client";
import SocialLogin from "./SocialLogin";

const GithubLogin: React.FC = (): JSX.Element => {
  const handleClick = () => {
    loginWithGitHub().catch((error) => console.log(error));
  };
  return (
    <button onClick={handleClick}>
      <SocialLogin Icon={AiFillGithub} />
    </button>
  );
};

export default GithubLogin;
