import useUser from "../../hooks/useUser";

const HomePage: React.FC = (): JSX.Element => {
  const user = useUser();
  return (
    <div>
      <div className=""> {user?.displayName}</div>
      <div className=""> {user?.email}</div>
      <img src={user?.photoURL} alt={user?.displayName} />
    </div>
  );
};

export default HomePage;
