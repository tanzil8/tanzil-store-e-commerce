
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,onAuthStateChanged} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBdK41fNP133dcxrBpzvg7hWTrV-xtZQHQ",
  authDomain: "tanzil-store-944b9.firebaseapp.com",
  projectId: "tanzil-store-944b9",
  storageBucket: "tanzil-store-944b9.appspot.com",
  messagingSenderId: "795960369838",
  appId: "1:795960369838:web:ccb2e265e5e862484a433f",
  measurementId: "G-9JRNSVE25C"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {storage,getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,onAuthStateChanged, app, auth,db}