import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "../firebase/client";
import { NormalizedUser } from "../interfaces";

const useUser = (): NormalizedUser | null => {
  const [User, setUser] = useState<NormalizedUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    console.log("[]");
    onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    console.log("[User]");
    console.log(User);
    User === null && router.push("/");
  }, [User]);

  return User;
};
export default useUser;
