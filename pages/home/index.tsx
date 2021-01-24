import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import Layout from "../../components/Layout";
import { ChatDB } from "../../firebase/client";
import { ChatPush, message } from "../../firebase/services";
import useUser from "../../hooks/useUser";

const HomePage: React.FC = (): JSX.Element => {
  const user = useUser();
  const [Text, setText] = useState("");
  const [Data, setData] = useState<any>([]);
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
      ChatPush({ ChatDB, Message });
    }
  };

  useEffect(() => {
    ChatDB.on("value", (snapshot) => {
      const data: any = snapshot.toJSON();
      for (const key in data) {
        setData([...Data, data[key]]);
      }
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <Layout ProfileSRC={user?.photoURL} ProfileALT={user?.displayName} title={"Home"}>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </Layout>
    </>
  );
};

export default HomePage;
