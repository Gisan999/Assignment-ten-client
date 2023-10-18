// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu8fJR9fWTfvsmAGMwYj_gbwAaNXZSxTk",
  authDomain: "assignment-ten-9d201.firebaseapp.com",
  projectId: "assignment-ten-9d201",
  storageBucket: "assignment-ten-9d201.appspot.com",
  messagingSenderId: "1080746274821",
  appId: "1:1080746274821:web:8731d66717d83e7bf36c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;