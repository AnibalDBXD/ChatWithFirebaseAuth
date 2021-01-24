import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  name: string;
  placeholder: string;
  type: "text" | "email" | "password";
  error?: string;
}

const Input: React.FC<Props> = ({ Icon, name, placeholder, type, error }): JSX.Element => {
  return (
    <div className="flex flex-col mb-4">
      <div className="relative">
        <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
          <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
            <Icon />
          </div>
        </div>

        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12 ${
            error && "border-red-500"
          }`}
        />
      </div>

      {error && (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
