import firebase from "firebase";

export type message = {
  User: {
    Name: string;
    photo: string;
  };
  text: string;
  Date: Date;
};

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
