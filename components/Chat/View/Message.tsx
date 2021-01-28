import useTimeAgo from "../../../hooks/useTimeAgo";
import Profile from "../../Profile";

type Props = {
  image?: string;
  name: string;
  text: string;
  createdAt: number;
};

const Message: React.FC<Props> = ({ image, name, text, createdAt }): JSX.Element => {
  const TimeAgo = useTimeAgo(createdAt);
  return (
    <div className="flex flex-col text-white">
      <div className="flex max-w-full mb-4">
        <div className="w-16">
          <div style={{ minWidth: "4rem" }}>
            <Profile src={image} alt="text" small />
          </div>
        </div>
        <div className="w-auto text-grey-darker items-center px-4">
          <span className="text-lg font-bold pb-4">{name}</span>
          <span className="text-gray-400 text-sm font-light pl-4">{TimeAgo}</span>
          <p className="leading-tight">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
