import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7bAWK_LwLgYXu4fliaP1KAHoUm8ZDot8",
  authDomain: "chat-app-eb4aa.firebaseapp.com",
  projectId: "chat-app-eb4aa",
  storageBucket: "chat-app-eb4aa.appspot.com",
  messagingSenderId: "540758999921",
  appId: "1:540758999921:web:e9a272defd2838a6b0ecd0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
