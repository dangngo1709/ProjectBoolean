import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyASlNiz7Tervi3xRLGtF3FSkFelms1gPXo",
  authDomain: "boolean-chat.firebaseapp.com",
  projectId: "boolean-chat",
  storageBucket: "boolean-chat.appspot.com",
  messagingSenderId: "88215986440",
  appId: "1:88215986440:web:c5b659f72cc824a74a0cbd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

