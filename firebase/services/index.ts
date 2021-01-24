import firebase from "firebase";

import { message } from "../../interfaces/";

export type chatPush = {
  ChatDB: firebase.database.Reference;
  Message: message;
};

export const ChatPush = ({ ChatDB, Message }: chatPush): void => {
  if (Message) {
    ChatDB.push({
      Message,
    });
  }
};
