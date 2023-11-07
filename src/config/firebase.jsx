// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC48IWuQ_aqH72ecfAMpbQMf5rP7O52ohQ",
  authDomain: "physicare-1f88a.firebaseapp.com",
  projectId: "physicare-1f88a",
  storageBucket: "physicare-1f88a.appspot.com",
  messagingSenderId: "331701498553",
  appId: "1:331701498553:web:c94a2246727d420b5c6168",
  measurementId: "G-KLVGPVQ13E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);

// Autenticação
export const auth = getAuth(app);