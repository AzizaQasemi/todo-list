import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpaIclkBa7vDZQ9gKp2Z2uHQDZL-QLFts",
    authDomain: "fire-proje-fa228.firebaseapp.com",
    projectId: "fire-proje-fa228",
    storageBucket: "fire-proje-fa228.appspot.com",
    messagingSenderId: "984925003378",
    appId: "1:984925003378:web:d62232aa2091a9908d2ceb"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export {db};