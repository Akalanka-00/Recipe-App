// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAu02mQxDY8SDysITI1pZguB8dIkwAm9YQ",
  authDomain: "recipe-app-e8758.firebaseapp.com",
  projectId: "recipe-app-e8758",
  storageBucket: "recipe-app-e8758.appspot.com",
  messagingSenderId: "511686215938",
  appId: "1:511686215938:web:6d750897d8d873635c9a1b",
  measurementId: "G-1BT0J5Z1WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
 export { db }