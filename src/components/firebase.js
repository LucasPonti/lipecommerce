import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA6ts0gJ_YZ6iaeSqoY24uYvPwrRBwTxzM",
  authDomain: "coderhouse-lipecommerce.firebaseapp.com",
  projectId: "coderhouse-lipecommerce",
  storageBucket: "coderhouse-lipecommerce.appspot.com",
  messagingSenderId: "540317955634",
  appId: "1:540317955634:web:21ee260c94d9e8cbe02e2b"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);