// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd-8JMJm8c5sqWtb8gtv3Uj03NL07dyaU",
  authDomain: "musicapp-c1be9.firebaseapp.com",
  projectId: "musicapp-c1be9",
  storageBucket: "musicapp-c1be9.appspot.com",
  messagingSenderId: "474234158996",
  appId: "1:474234158996:web:6d7780ec55f79e4221d981",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
