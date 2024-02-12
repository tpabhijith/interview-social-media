import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDixX8taGaE21LREiG_CRfYiW0Mneyjfp4",
    authDomain: "social-media-1bf75.firebaseapp.com",
    projectId: "social-media-1bf75",
    storageBucket: "social-media-1bf75.appspot.com",
    messagingSenderId: "284801767565",
    appId: "1:284801767565:web:5fbfce0f0c1d0ab68beac4"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }