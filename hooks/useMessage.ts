import firebase from "firebase";
import { useEffect, useState } from "react";

import { message } from "../firebase/services";

const useMessage = (DB: firebase.database.Reference): [message[], boolean, Error | null] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [rawMessages, setrawMessages] = useState<any | null>();
  const [MessagesList, setMessagesList] = useState<message[]>([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState<null | Error>(null);

  useEffect(() => {
    setLoading(true);
    try {
      DB.on("value", (snapshot) => {
        setrawMessages(snapshot.toJSON());
      });
    } catch (error) {
      setError(error);
    }
  }, [DB]);

  useEffect(() => {
    if (rawMessages) {
      const list = [];
      for (const key in rawMessages) {
        list.push(rawMessages[key].Message);
      }
      setMessagesList(list);
    }
    setLoading(false);
  }, [rawMessages]);

  return [MessagesList, Loading, Error];
};

export default useMessage;
