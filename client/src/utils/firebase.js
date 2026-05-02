import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-d83bb.firebaseapp.com",
  projectId: "ai-interview-d83bb",
  storageBucket: "ai-interview-d83bb.firebasestorage.app",
  messagingSenderId: "721427953951",
  appId: "1:721427953951:web:b5c60de74af134a0a0d82a",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
