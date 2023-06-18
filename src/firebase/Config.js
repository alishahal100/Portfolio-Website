// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqrheVM-Z4dKJXgdkcFNKEetuk5DRFjMo",
  authDomain: "portfolio-website-60ee2.firebaseapp.com",
  projectId: "portfolio-website-60ee2",
  storageBucket: "portfolio-website-60ee2.appspot.com",
  messagingSenderId: "376945381064",
  appId: "1:376945381064:web:ed3ca39216b1ebd76f5ffd",
  measurementId: "G-BYNQM0YMDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);