import { AiFillFacebook } from "react-icons/ai";

// import { loginWithFacebook } from "../../firebase/client";
import SocialLogin from "./SocialLogin";

const FacebookLogin: React.FC = (): JSX.Element => {
  const handleClick = () => {
    // loginWithFacebook().catch((error) => console.log(error));
  };
  return (
    <button onClick={handleClick}>
      <SocialLogin Icon={AiFillFacebook} />
    </button>
  );
};

export default FacebookLogin;
