// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8aLBbEEv0IIHM0LfwYbf5iFr6hDofKBo",
  authDomain: "kfwines-16b74.firebaseapp.com",
  projectId: "kfwines-16b74",
  storageBucket: "kfwines-16b74.appspot.com",
  messagingSenderId: "180202285491",
  appId: "1:180202285491:web:32a85811ac03218b4903c6",
  measurementId: "G-RJYRJSSLB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);