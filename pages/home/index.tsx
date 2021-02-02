import Chat from "../../components/Chat";
import Layout from "../../components/Layout";
import LoadingScreen from "../../components/Loading";
import { ChatDB } from "../../firebase/client";
import useUser from "../../hooks/useUser";

const HomePage: React.FC = (): JSX.Element => {
  const User = useUser();

  return (
    <>
      {!User ? (
        <LoadingScreen />
      ) : (
        <Layout ProfileSRC={User?.photoURL} ProfileALT={User?.displayName} title={"Home"}>
          <Chat UserInstance={User} ChatDB={ChatDB} />
        </Layout>
      )}
    </>
  );
};

export default HomePage;
