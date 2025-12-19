// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPDbam2TqyufRPuJfz_BFlqvwXVTxTZsE",
  authDomain: "mern-book-inventory-bb4c5.firebaseapp.com",
  projectId: "mern-book-inventory-bb4c5",
  storageBucket: "mern-book-inventory-bb4c5.firebasestorage.app",
  messagingSenderId: "996761811246",
  appId: "1:996761811246:web:849950d08bd31a721462bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;