// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_PUDX_wXnaMbF63HI1XwlkWyJykdJ6Ro",
  authDomain: "chat-app-f9617.firebaseapp.com",
  projectId: "chat-app-f9617",
  storageBucket: "chat-app-f9617.appspot.com",
  messagingSenderId: "565035548945",
  appId: "1:565035548945:web:64fe9a31f254545bc24cb0",
  measurementId: "G-1EVPCBBMR5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();