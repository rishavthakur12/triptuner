// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXqw5jBxEqmxJORFekBN50f0YCF4SP3g0",
  authDomain: "chit-chat-f7f26.firebaseapp.com",
  projectId: "chit-chat-f7f26",
  storageBucket: "chit-chat-f7f26.appspot.com",
  messagingSenderId: "846773171490",
  appId: "1:846773171490:web:719aa72e5cf0c73299217b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
