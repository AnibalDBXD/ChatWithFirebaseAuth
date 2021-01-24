import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

import { signOut } from "../firebase/client";
import Profile from "./Profile";
type Props = {
  ProfileSRC?: string;
  ProfileALT?: string;
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({
  ProfileSRC,
  ProfileALT,
  children,
  title = "This is the default title",
}): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    signOut()
      .catch((error) => {
        console.log(error);
      })
      .finally(() => router.push("/login"));
  };
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Profile alt={ProfileALT} src={ProfileSRC} />|{" "}
          <button onClick={handleClick}>SignOut</button>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
