import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_Ov7Lo1X_IK26rHJUI2_zGPFOw1CodZ8",
    authDomain: "ecoroots-markett.firebaseapp.com",
    projectId: "ecoroots-markett",
    storageBucket: "ecoroots-markett.firebasestorage.app",
    messagingSenderId: "30236223361",
    appId: "1:30236223361:web:239e8b7c2e4c70a7b0aa80",
    measurementId: "G-5PPGTJ5LF2"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);