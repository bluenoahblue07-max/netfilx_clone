import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBTQ_9MR6utOJ2bez6AcdjJgvThxAAK2tg",
  authDomain: "netflix-clone-33c67.firebaseapp.com",
  projectId: "netflix-clone-33c67",
  storageBucket: "netflix-clone-33c67.firebasestorage.app",
  messagingSenderId: "471037535827",
  appId: "1:471037535827:web:b7cf7f81e7531837e448a6",
  measurementId: "G-GXB1993NE2",
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

const formatFirebaseError = (error) => {
  const message = error?.code || error?.message || "Something went wrong";
  return message.replace(/^auth\//i, "").replace(/-/g, " ");
};

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error("Signup failed:", error);
    toast.error(formatFirebaseError(error));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login failed:", error);
    toast.error(formatFirebaseError(error));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout failed:", error);
    toast.error(formatFirebaseError(error));
  }
};

export { auth, db, analytics, login, signup, logout };
