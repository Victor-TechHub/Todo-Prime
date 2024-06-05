import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "todo-app-full-stack",
  storageBucket: "todo-app-full-stack.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:523554615144:web:e8fcf3add17937846ef0dd"
};


const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
const auth = getAuth(app)

export { database, auth }