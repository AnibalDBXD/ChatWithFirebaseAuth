import { AiOutlineMail } from "react-icons/ai";

import Input from "./Input";

type Props = {
  placeholder?: string;
};

const Email: React.FC<Props> = ({ placeholder = "Email" }): JSX.Element => (
  <Input
    Icon={AiOutlineMail}
    name="email"
    placeholder={placeholder}
    type="email"
    autocomplete="email"
  />
);

export default Email;
