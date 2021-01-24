import { useEffect, useState } from "react";

import { onAuthStateChanged } from "../firebase/client";
import { NormalizedUser } from "../interfaces";

const useUser = (): [NormalizedUser | null, boolean] => {
  const [User, setUser] = useState<NormalizedUser | null>(null);
  const [Loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(setUser);
    setLoading(false);
  }, []);

  return [User, Loading];
};
export default useUser;
