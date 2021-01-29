import { useEffect, useRef } from "react";

import { message } from "../../../interfaces";
import Message from "./Message";

type Props = {
  MessagesList: message[];
  Loading: boolean;
};

const View: React.FC<Props> = ({ MessagesList, Loading }): JSX.Element => {
  const DownScroll = useRef<HTMLDivElement>(null);

  useEffect(() => {
    DownScroll.current && DownScroll.current.scrollIntoView(true);
  }, [MessagesList]);

  return (
    <div
      className="bg-gray-800 p-8 overflow-auto h-full w-screen  scrollbar scrollbar-track-gray-500 scrollbar-thumb-gray-400 scrollbar-thumb-rounded"
      style={{ height: "80vh" }}>
      {Loading ? (
        <h1>Loading</h1>
      ) : (
        MessagesList &&
        MessagesList.map((msg, i) => {
          const { seconds } = msg.time;
          return (
            <Message
              name={msg.User.Name}
              text={msg.text}
              key={i}
              image={msg.User.photo}
              createdAt={+new Date(seconds)}
            />
          );
        })
      )}
      <div ref={DownScroll}></div>
    </div>
  );
};

export default View;
