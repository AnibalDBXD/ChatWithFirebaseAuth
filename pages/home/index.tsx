import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import Layout from "../../components/Layout";
import { ChatDB } from "../../firebase/client";
import { ChatPush } from "../../firebase/services";
import useMessage from "../../hooks/useMessage";
import useUser from "../../hooks/useUser";
import { message } from "../../interfaces";

const HomePage: React.FC = (): JSX.Element => {
  const [user, userLoading] = useUser();
  const [Text, setText] = useState("");
  const [MessagesList, messageLoading, messageError] = useMessage(ChatDB);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      const Message: message = {
        User: {
          Name: user.displayName,
          photo: user.photoURL,
        },
        text: Text,
        Date: new Date(),
      };
      setText("");
      ChatPush({ ChatDB, Message });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    messageError && alert("An error has occurred! Please try again later");
  }, [messageError]);

  return (
    <>
      {userLoading && messageLoading ? (
        <h1>Loading</h1>
      ) : (
        <Layout ProfileSRC={user?.photoURL} ProfileALT={user?.displayName} title={"Home"}>
          <form onSubmit={handleSubmit}>
            <input type="text" value={Text} onChange={handleChange} />
            <input type="submit" value="Submit" />
          </form>
          {MessagesList && MessagesList.map((message, i) => <p key={i}>{message.text}</p>)}
        </Layout>
      )}
    </>
  );
};

export default HomePage;
