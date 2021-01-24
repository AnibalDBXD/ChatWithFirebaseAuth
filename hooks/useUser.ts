import { useEffect, useState } from "react";

import { onAuthStateChanged } from "../firebase/client";
import { NormalizedUser } from "../interfaces";

const useUser = (): NormalizedUser | null => {
  const [User, setUser] = useState<NormalizedUser | null>(null);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  return User;
};
export default useUser;
