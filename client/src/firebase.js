// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realtor-estate-e5cc5.firebaseapp.com",
  projectId: "realtor-estate-e5cc5",
  storageBucket: "realtor-estate-e5cc5.firebasestorage.app",
  messagingSenderId: "189615900590",
  appId: "1:189615900590:web:0406b8df0ab32b6c5daa3f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
