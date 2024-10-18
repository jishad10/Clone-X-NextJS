// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-social-app2.firebaseapp.com",
  projectId: "next-social-app2",
  storageBucket: "next-social-app2.appspot.com",
  messagingSenderId: "645948828088",
  appId: "1:645948828088:web:07aef8024b7b094b97074d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);