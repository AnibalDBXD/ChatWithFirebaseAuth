import { AiOutlineGoogle } from "react-icons/ai";

// import { loginWithGoogle } from "../../firebase/client";
import SocialLogin from "./SocialLogin";

const GoogleLogin: React.FC = (): JSX.Element => {
  const handleClick = () => {
    // loginWithGoogle().catch((error) => console.log(error));
  };
  return (
    <button onClick={handleClick}>
      <SocialLogin Icon={AiOutlineGoogle} />
    </button>
  );
};

export default GoogleLogin;
