import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA6ts0gJ_YZ6iaeSqoY24uYvPwrRBwTxzM" ,
  authDomain: "coderhouse-lipecommerce.firebaseapp.com" ,
  projectId: "coderhouse-lipecommerce" ,
  storageBucket: "coderhouse-lipecommerce.appspot.com" ,
  messagingSenderId: "540317955634" ,
  appId: "1:540317955634:web:21ee260c94d9e8cbe02e2b"
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);