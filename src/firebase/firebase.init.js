import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlCPIhIvbvdi1wCzEHEn6Tsf-nAt0kAYM",
  authDomain: "fir-auth-udemy-fa26f.firebaseapp.com",
  projectId: "fir-auth-udemy-fa26f",
  storageBucket: "fir-auth-udemy-fa26f.firebasestorage.app",
  messagingSenderId: "865592028783",
  appId: "1:865592028783:web:f43d99afafbfb81e10a79a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
