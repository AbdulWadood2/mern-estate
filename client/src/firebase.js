// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-87c8a.firebaseapp.com",
  projectId: "mern-estate-87c8a",
  storageBucket: "mern-estate-87c8a.appspot.com",
  messagingSenderId: "413299592916",
  appId: "1:413299592916:web:d7c0a6b6c599596348f541",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
