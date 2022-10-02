import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider);
};

export { signInWithGoogle };
