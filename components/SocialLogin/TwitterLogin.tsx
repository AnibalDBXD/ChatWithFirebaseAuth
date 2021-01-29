import { AiOutlineTwitter } from "react-icons/ai";

import { loginWithTwitter } from "../../firebase/client";
import SocialLogin from "./SocialLogin";

const TwitterLogin: React.FC = (): JSX.Element => {
  const handleClick = () => {
    loginWithTwitter().catch((error) => console.log(error));
  };
  return (
    <button onClick={handleClick}>
      <SocialLogin Icon={AiOutlineTwitter} />
    </button>
  );
};

export default TwitterLogin;
