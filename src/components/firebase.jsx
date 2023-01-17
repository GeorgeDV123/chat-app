import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

// Firebase init
const firebaseConfig = {
  apiKey: "AIzaSyDExTGrAXK0KrDGCVfBj9PZzBrUemegq1U",
  authDomain: "chat-app-164e0.firebaseapp.com",
  projectId: "chat-app-164e0",
  storageBucket: "chat-app-164e0.appspot.com",
  messagingSenderId: "1072635573296",
  appId: "1:1072635573296:web:d0df3d49f3c482c3dd69f5",
  measurementId: "G-983H8L01ZW",
};
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();