// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhS6LgVEVymhyDyGXLCijKCzadikXsYCk",
  authDomain: "ecommerse-login-efb41.firebaseapp.com",
  projectId: "ecommerse-login-efb41",
  storageBucket: "ecommerse-login-efb41.appspot.com",
  messagingSenderId: "290497314482",
  appId: "1:290497314482:web:7b109e9e2ee11a0eb713ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db = getFirestore(app);
export default app;