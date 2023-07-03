import firebase from 'firebase/compat/app';
// Update import statement

// Import other Firebase services using the compat syntax
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


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
firebase.initializeApp(firebaseConfig);

// Create and export Firebase services
const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebase, auth, firestore };
