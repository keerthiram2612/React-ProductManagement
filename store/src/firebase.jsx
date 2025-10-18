// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWF_CgbNyVUosjoLUPOuAiBJi1OJtoXNI",
  authDomain: "product-10d82.firebaseapp.com",
  projectId: "product-10d82",
  storageBucket: "product-10d82.firebasestorage.app",
  messagingSenderId: "952436026549",
  appId: "1:952436026549:web:81472cfb5470218998e2fc",
  measurementId: "G-P2MM3DFSD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();