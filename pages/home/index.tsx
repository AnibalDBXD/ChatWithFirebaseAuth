import Chat from "../../components/Chat";
import Layout from "../../components/Layout";
import { ChatDB } from "../../firebase/client";
import useUser from "../../hooks/useUser";

const HomePage: React.FC = (): JSX.Element => {
  const User = useUser();

  return (
    <>
      {!User ? (
        <h1>Loading</h1>
      ) : (
        <Layout ProfileSRC={User?.photoURL} ProfileALT={User?.displayName} title={"Home"}>
          <Chat UserInstance={User} ChatDB={ChatDB} />
        </Layout>
      )}
    </>
  );
};

export default HomePage;
