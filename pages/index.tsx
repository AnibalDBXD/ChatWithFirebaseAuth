import useUser from "../hooks/useUser";

const IndexPage: React.FC = (): JSX.Element => {
  const user = useUser();

  return <div>Loading</div>;
};

export default IndexPage;
