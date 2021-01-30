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

export const ChatDB = firebase.database().ref("chat");

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

export const signOut = async (): Promise<void> => {
  return await firebase
    .auth()
    .signOut()
    .catch((error) => {
      console.log(error);
    });
};

export const onAuthStateChanged = (
  onChange: Dispatch<SetStateAction<NormalizedUser | null | undefined>>,
): firebase.Unsubscribe => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = async (): Promise<firebase.auth.UserCredential> => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return await firebase.auth().signInWithPopup(githubProvider);
};

export const loginWithTwitter = async (): Promise<firebase.auth.UserCredential> => {
  const TwitterProvider = new firebase.auth.TwitterAuthProvider();
  return await firebase.auth().signInWithPopup(TwitterProvider);
};

export const loginWithFacebook = async (): Promise<firebase.auth.UserCredential> => {
  const FacebookProvider = new firebase.auth.FacebookAuthProvider();
  return await firebase.auth().signInWithPopup(FacebookProvider);
};

export const loginWithGoogle = async (): Promise<firebase.auth.UserCredential> => {
  const GoogleProvider = new firebase.auth.GoogleAuthProvider();
  return await firebase.auth().signInWithPopup(GoogleProvider);
};

export const createUser = async (
  email: string,
  password: string,
): Promise<firebase.auth.UserCredential> => {
  return await firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const loginUser = async (
  email: string,
  password: string,
): Promise<firebase.auth.UserCredential> => {
  return await firebase.auth().signInWithEmailAndPassword(email, password);
};
