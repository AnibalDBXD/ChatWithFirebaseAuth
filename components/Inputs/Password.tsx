import { AiOutlineLock } from "react-icons/ai";

import Input from "./Input";

type Props = {
  placeholder?: string;
};

const Password: React.FC<Props> = ({ placeholder = "Password" }): JSX.Element => (
  <Input
    Icon={AiOutlineLock}
    name="password"
    placeholder={placeholder}
    type="password"
    autocomplete="current-password"
  />
);

export default Password;
