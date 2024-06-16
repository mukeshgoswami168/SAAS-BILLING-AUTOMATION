// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsLcvF1yPp_Nox9OqdfUYm6wb6fgLgwss",
  authDomain: "billing-411608.firebaseapp.com",
  projectId: "billing-411608",
  storageBucket: "billing-411608.appspot.com",
  messagingSenderId: "717484864249",
  appId: "1:717484864249:web:9c766e4c490be867ff2828",
  measurementId: "G-3RCCRFXE7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();