// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_5h2FATu0tI1SWmEdd_WWe_SVRZDnZao",
  authDomain: "naijahub-f795a.firebaseapp.com",
  projectId: "naijahub-f795a",
  storageBucket: "naijahub-f795a.firebasestorage.app",
  messagingSenderId: "556454336794",
  appId: "1:556454336794:web:90ec1d5e858cec8d35b4a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}
