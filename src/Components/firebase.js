import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCau3-U8t2yxRCYpPsy4dIy3-dtghKGOz8",
    authDomain: "eshop-9c825.firebaseapp.com",
    projectId: "eshop-9c825",
    storageBucket: "eshop-9c825.appspot.com",
    messagingSenderId: "761612542882",
    appId: "1:761612542882:web:e6d559dce2f1cc4604c8fb",
    measurementId: "G-9CZD2T1CTE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
