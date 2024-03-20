// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEodee1QN79qITFOtWL11BVBadv6XDPkk",
  authDomain: "netflix-gpt-b317c.firebaseapp.com",
  projectId: "netflix-gpt-b317c",
  storageBucket: "netflix-gpt-b317c.appspot.com",
  messagingSenderId: "40445420552",
  appId: "1:40445420552:web:133a8af7d2a0fc525c5dbd",
  measurementId: "G-ESBB88X2D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
