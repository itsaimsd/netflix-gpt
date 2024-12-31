// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG_QNeCx8J0mSFV1PraUOSX3yQZQucScQ",
  authDomain: "netflixgpt-feb2a.firebaseapp.com",
  projectId: "netflixgpt-feb2a",
  storageBucket: "netflixgpt-feb2a.firebasestorage.app",
  messagingSenderId: "292295682141",
  appId: "1:292295682141:web:251a96911419b9d24245b4",
  measurementId: "G-6WFV7QYHX4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
