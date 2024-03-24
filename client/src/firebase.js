// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "havenhub-fe881.firebaseapp.com",
  projectId: "havenhub-fe881",
  storageBucket: "havenhub-fe881.appspot.com",
  messagingSenderId: "781179850476",
  appId: "1:781179850476:web:d9d0b9198fc26560c45fc9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);