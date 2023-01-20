// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyA6F3FqlWKAEAMzZyKU9An6jfToQNiDyNs",
  authDomain: "blog4-6ae36.firebaseapp.com",
  projectId: "blog4-6ae36",
  storageBucket: "blog4-6ae36.appspot.com",
  messagingSenderId: "499995845523",
  appId: "1:499995845523:web:8d48c54b44fba53bb0fe66"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();