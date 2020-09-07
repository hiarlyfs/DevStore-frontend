import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: '337323071845',
  appId: '1:337323071845:web:ad527f5e3aaa9b3397698c',
  measurementId: 'G-9JT8YTD1R3',
};

export const firebaseApp = firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
