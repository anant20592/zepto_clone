import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD-PSYFpjnVbrKLKoeZKlEQzbaLIVbgpDQ",
  authDomain: "zepto-122ca.firebaseapp.com",
  projectId: "zepto-122ca",
  storageBucket: "zepto-122ca.appspot.com",
  messagingSenderId: "63304365760",
  appId: "1:63304365760:web:a2efef12984c8a34ed9f25",
  measurementId: "G-B3QJ99FCGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);