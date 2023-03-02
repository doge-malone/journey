// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE8h47yFgaqwIvLQeZGgDQQzjj3oGVdSE",
  authDomain: "journey-waves.firebaseapp.com",
  projectId: "journey-waves",
  storageBucket: "journey-waves.appspot.com",
  messagingSenderId: "704910834641",
  appId: "1:704910834641:web:0be2930bfb63b7c2af7ef0",
  measurementId: "G-F48QE2WGFV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
