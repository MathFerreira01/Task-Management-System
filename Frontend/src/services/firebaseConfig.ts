import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC6RgLOSISfySsmzfAPJHPssaZ_4v4xxfA",
  authDomain: "react-login-hoteis.firebaseapp.com",
  projectId: "react-login-hoteis",
  storageBucket: "react-login-hoteis.appspot.com",
  messagingSenderId: "396894011014",
  appId: "1:396894011014:web:af963478defee59ef29b07"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);