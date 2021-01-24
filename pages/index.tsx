import Link from "next/link";
const IndexPage: React.FC = (): JSX.Element => {
  return (
    <div>
      <Link href="/signin">
        <a>Sign in</a>
      </Link>
      <Link href="/login">
        <a>Log in</a>
      </Link>
    </div>
  );
};

export default IndexPage;
