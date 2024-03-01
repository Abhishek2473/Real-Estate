// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "makeestate-13940.firebaseapp.com",
  projectId: "makeestate-13940",
  storageBucket: "makeestate-13940.appspot.com",
  messagingSenderId: "132902562041",
  appId: "1:132902562041:web:f80e85050fa9ba6cd21a28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);