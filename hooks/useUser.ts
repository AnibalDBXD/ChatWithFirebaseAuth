import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "../firebase/client";
import { NormalizedUser } from "../interfaces";

const useUser = (): NormalizedUser | null | undefined => {
  const [User, setUser] = useState<NormalizedUser | null | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    User === null && router.push("/login");
    User && router.push("/home");
  }, [User, router]);

  return User;
};
export default useUser;
