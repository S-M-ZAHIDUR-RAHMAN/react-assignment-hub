// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy9TnKaw-PUX9lShDOdB50HUYIEY1QfTA",
  authDomain: "react-assignment-hub.firebaseapp.com",
  projectId: "react-assignment-hub",
  storageBucket: "react-assignment-hub.appspot.com",
  messagingSenderId: "577199813855",
  appId: "1:577199813855:web:0d2b73a90a114ee718656a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;