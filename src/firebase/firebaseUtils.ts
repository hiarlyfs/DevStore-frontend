import * as firebase from 'firebase';
import { firebaseAuth } from './firebaseConfig';

export const signInWithGoogle = (): void => {
  firebaseAuth.languageCode = 'pt';
  const provider = new firebase.auth.GoogleAuthProvider();

  firebaseAuth.signInWithPopup(provider).then(({ user }) => {
    console.log(user?.photoURL);
  });
};

export const createUserWithEmailAndPassword = (
  email: string,
  password: string,
): void => {
  firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then(function (res) {
      console.log(res.user);
    });
};

export const signIn = (email: string, password: string): void => {
  firebaseAuth.signInWithEmailAndPassword(email, password).then((res) => {
    console.log(res.user);
  });
};
