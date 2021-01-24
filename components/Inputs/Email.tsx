import { AiOutlineMail } from "react-icons/ai";

import Input from "./Input";

const Email: React.FC = (): JSX.Element => (
  <Input Icon={AiOutlineMail} name="email" placeholder="Email" type="email" />
);

export default Email;
