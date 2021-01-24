import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
}

const SocialLogin: React.FC<Props> = ({ Icon }): JSX.Element => (
  <Icon className="h-12 w-12 p-2 border text-gray-600 border-gray-600 rounded-full" />
);

export default SocialLogin;
