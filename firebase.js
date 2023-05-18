import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ecommerce--clone-dff35.firebaseapp.com",
  projectId: "ecommerce--clone-dff35",
  storageBucket: "ecommerce--clone-dff35.appspot.com",
  messagingSenderId: "234576311632",
  appId: "1:234576311632:web:a323a426b1b21f2d08e855",
  measurementId: "G-YF522GW4HN",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
