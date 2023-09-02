// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkLRLLU-HXSdxnfeVTp9LbJsUphSyUqY4",
  authDomain: "vtireactjs.firebaseapp.com",
  projectId: "vtireactjs",
  storageBucket: "vtireactjs.appspot.com",
  messagingSenderId: "577290454396",
  appId: "1:577290454396:web:29d80df0b32d08c7b990f9",
  measurementId: "G-ZMVKDN4D7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);