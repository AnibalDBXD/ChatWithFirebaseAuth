export type NormalizedUser = {
  photoURL: string;
  email: string;
  displayName: string;
};

export type message = {
  User: {
    Name: string;
    photo: string;
  };
  text: string;
  time?: any;
};
