type Props = {
  children: React.ReactChild;
};

const Button: React.FC<Props> = ({ children }): JSX.Element => (
  <button className="bg-blue-500 text-white w-full h-12 mx-auto">{children}</button>
);
export default Button;
