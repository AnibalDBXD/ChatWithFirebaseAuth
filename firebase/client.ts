import firebase from "firebase";
import { Dispatch, SetStateAction } from "react";

import { NormalizedUser } from "../interfaces";

const firebaseConfig = {
  apiKey: "AIzaSyBcXHOCjlIRpL6IeJHc5USbofAdYxzzn30",
  authDomain: "authentication-chatapp.firebaseapp.com",
  projectId: "authentication-chatapp",
  storageBucket: "authentication-chatapp.appspot.com",
  messagingSenderId: "175228042272",
  appId: "1:175228042272:web:1b8200ea60eeb3f3cd1045",
  measurementId: "G-BGNK04CQH1",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapUserFromFirebaseAuthToUser = (data: any): NormalizedUser => {
  if (data.user) {
    const { user } = data;
    const { photoURL, email, displayName }: NormalizedUser = user;
    return {
      photoURL,
      displayName,
      email,
    };
  } else {
    const { photoURL, email, displayName }: NormalizedUser = data;
    return {
      photoURL,
      displayName,
      email,
    };
  }
};

export const onAuthStateChanged = (
  onChange: Dispatch<SetStateAction<NormalizedUser | null>>,
): firebase.Unsubscribe => {
  return firebase.auth().onAuthStateChanged((user) => {
    console.log("onAuthStateChanged", user);
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    console.log("normalizedUser", normalizedUser);
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
