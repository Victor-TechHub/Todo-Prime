import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAlWOpiU8WZ_leSzqDNE-LcAaH_DYrLPI4",
  authDomain: "todo-app-full-stack.firebaseapp.com",
  projectId: "todo-app-full-stack",
  storageBucket: "todo-app-full-stack.appspot.com",
  messagingSenderId: "523554615144",
  appId: "1:523554615144:web:e8fcf3add17937846ef0dd"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
const auth = getAuth(app)

export { database, auth }