import { AiOutlineLock } from "react-icons/ai";

import Input from "./Input";

const Password: React.FC = (): JSX.Element => (
  <Input Icon={AiOutlineLock} name="password" placeholder="Password" type="password" />
);

export default Password;
