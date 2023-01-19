import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAik9q7IYaX6pzhLCqnnIG4Vk-pVfmJWjs",
  authDomain: "task-manager-f575e.firebaseapp.com",
  projectId: "task-manager-f575e",
  storageBucket: "task-manager-f575e.appspot.com",
  messagingSenderId: "798276901228",
  appId: "1:798276901228:web:bd8a6473540b790495bb49"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)