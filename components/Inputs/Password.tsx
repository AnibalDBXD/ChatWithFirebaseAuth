import { AiOutlineLock } from "react-icons/ai";

import Input from "./Input";

type Props = {
  placeholder?: string;
  name?: string;
  error?: string;
};

const Password: React.FC<Props> = ({
  placeholder = "Password",
  name = "password",
  error,
}): JSX.Element => (
  <Input
    Icon={AiOutlineLock}
    name={name}
    placeholder={placeholder}
    type="password"
    error={error && error}
    autocomplete="current-password"
  />
);

export default Password;
