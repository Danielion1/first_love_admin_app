// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCNljhRt_sHFU7XKG3JGqQrdg6EXogwucw",
  authDomain: "flcna-87617.firebaseapp.com",
  projectId: "flcna-87617",
  storageBucket: "flcna-87617.appspot.com",
  messagingSenderId: "850865338305",
  appId: "1:850865338305:web:ad7a3b84292f21c093a140",
  measurementId: "G-V2QKMPYT3T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();