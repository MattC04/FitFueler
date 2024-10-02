// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@react-native-firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArtW6BR0oyFyibzuhh8M3co44GElbB1iQ",
  authDomain: "fitfueler-e3097.firebaseapp.com",
  databaseURL: "https://fitfueler-e3097-default-rtdb.firebaseio.com",
  projectId: "fitfueler-e3097",
  storageBucket: "fitfueler-e3097.appspot.com",
  messagingSenderId: "6588128634",
  appId: "1:6588128634:web:106ff081a1aea058e74ac3",
  measurementId: "G-TKZ5M01SFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const atuh = getAuth(app)