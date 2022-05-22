// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_API_apiKey,
  // authDomain: process.env.REACT_API_authDomain,
  // projectId: process.env.REACT_API_projectId,
  // storageBucket: process.env.REACT_API_storageBucket,
  // messagingSenderId: process.env.REACT_API_messagingSenderId,
  // appId: process.env.REACT_API_appId,
  apiKey: "AIzaSyBOlVmBvmAhKciOoGhVGV1K2EveDDdC0zg",
  authDomain: "aircool-d3a27.firebaseapp.com",
  projectId: "aircool-d3a27",
  storageBucket: "aircool-d3a27.appspot.com",
  messagingSenderId: "674827055674",
  appId: "1:674827055674:web:2e2b5d801600643292fb03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
