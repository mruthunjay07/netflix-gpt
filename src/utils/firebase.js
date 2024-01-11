    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_fNowYpUzettE013ItwuoKblVlGrgJgM",
  authDomain: "netflixgpt-5797a.firebaseapp.com",
  projectId: "netflixgpt-5797a",
  storageBucket: "netflixgpt-5797a.appspot.com",
  messagingSenderId: "231877042555",
  appId: "1:231877042555:web:91c49b8c5daeddd90c5dde",
  measurementId: "G-QBM7FV1GCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();