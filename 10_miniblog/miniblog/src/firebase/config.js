
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA9OIUUr8DLe4PNyW8Al6EzpYLEYkDidF4",
  authDomain: "miniblog-54bcb.firebaseapp.com",
  projectId: "miniblog-54bcb",
  storageBucket: "miniblog-54bcb.appspot.com",
  messagingSenderId: "853528545324",
  appId: "1:853528545324:web:53ed8910be274ccff4e989"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };