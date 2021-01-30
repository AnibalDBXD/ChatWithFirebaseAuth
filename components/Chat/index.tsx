import firebase from "firebase";
import { FormEvent, useEffect, useRef } from "react";

import { ChatPush } from "../../firebase/services";
import useMessage from "../../hooks/useMessage";
import { message, NormalizedUser } from "../../interfaces";
import View from "./View";

type Props = {
  UserInstance: NormalizedUser | null;
  ChatDB: firebase.database.Reference;
};

const Chat: React.FC<Props> = ({ UserInstance, ChatDB }): JSX.Element => {
  const [MessagesList, messageLoading, messageError] = useMessage(ChatDB);
  useEffect(() => {
    messageError && alert("An error has occurred! Please try again later");
  }, [messageError]);

  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (UserInstance) {
      const InputValue = ref.current?.value;
      if (InputValue) {
        const Name = UserInstance.displayName ? UserInstance.displayName : UserInstance.email;
        const time = firebase.firestore.Timestamp.fromDate(new Date());
        const Message: message = {
          User: {
            Name,
            photo: UserInstance.photoURL,
          },
          text: InputValue,
          time,
        };
        ChatPush({ ChatDB, Message });
      }
    }
  };

  return (
    <>
      <View MessagesList={MessagesList} Loading={messageLoading} />
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-4 h-full w-full flex content-center justify-center"
        style={{ height: "10vh" }}>
        <div className="text-white overflow-hidden bg-gray-600 h-full rounded-lg w-full">
          <input
            ref={ref}
            className="bg-gray-600 h-full outline-none p-4 w-full"
            type="text"
            placeholder="Type a message here"
          />
        </div>
      </form>
    </>
  );
};

export default Chat;
