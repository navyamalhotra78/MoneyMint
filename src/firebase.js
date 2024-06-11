// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPQmddRyQeMBlI_ijGy8BlGL7_nctVnjk",
    authDomain: "moneymint-8f687.firebaseapp.com",
    projectId: "moneymint-8f687",
    storageBucket: "moneymint-8f687.appspot.com",
    messagingSenderId: "249370085320",
    appId: "1:249370085320:web:1e99ba707ec267aa3422fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider, database };