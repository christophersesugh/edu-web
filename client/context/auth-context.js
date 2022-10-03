import React from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseConfig } from "../utils/config";
import { useAsync } from "../utils/hooks/use-async";
import { useModal } from "./modal-context";
import MainIndicator from "../components/loading/main-indicator";
import ErrorFallback from "../components/error-falback";

const app = initializeApp(firebaseConfig);

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = (props) => {
  const {
    status,
    error,
    data: user,
    setData: setUser,
    isIdle,
    isLoading,
    isSuccess,
    isError,
  } = useAsync();

  const { setIsOpen } = useModal();

  const loginWithGoogle = async () => {
    signInWithPopup(auth, googleProvider);
    setIsOpen(false);
  };

  const signin = async ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async ({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    auth.signOut();
    setUser(null);
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, [auth, user]);

  if (isIdle || isLoading) {
    return <MainIndicator />;
  }

  if (isError) {
    return <ErrorFallback error={error} />;
  }

  if (isSuccess) {
    return (
      <AuthContext.Provider
        value={{
          user,
          signin,
          login,
          loginWithGoogle,
          logout,
        }}
        {...props}
      />
    );
  }
  throw new Error(`Unhandled status: ${status}`);
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
};

export { useAuth, AuthProvider };
