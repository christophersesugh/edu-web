// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7ZSX8enkXlufW7wS1plD0RSou6Q1KSrk",
  authDomain: "edu-web-40495.firebaseapp.com",
  projectId: "edu-web-40495",
  storageBucket: "edu-web-40495.appspot.com",
  messagingSenderId: "1023493534224",
  appId: "1:1023493534224:web:e489716e77ef7bb9f25095",
  measurementId: "G-HXY58W65VC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
