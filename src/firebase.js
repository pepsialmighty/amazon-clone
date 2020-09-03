import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAkP792f1F6af-WffII1769iwGibzJp0hY",
  authDomain: "clone-f4d5d.firebaseapp.com",
  databaseURL: "https://clone-f4d5d.firebaseio.com",
  projectId: "clone-f4d5d",
  storageBucket: "clone-f4d5d.appspot.com",
  messagingSenderId: "1081271644280",
  appId: "1:1081271644280:web:63d8a047c2e189260ffd8d",
  measurementId: "G-EN6GVTW9P3",
});

const db = firebaseApp.firestore;
const auth = firebase.auth();

export { db, auth };
