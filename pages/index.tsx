import LoadingScreen from "../components/Loading";
import useUser from "../hooks/useUser";

const IndexPage: React.FC = (): JSX.Element => {
  useUser();

  return <LoadingScreen />;
};

export default IndexPage;
