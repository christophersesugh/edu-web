import React from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  reauthenticateWithPopup,
  signInWithRedirect,
  GithubAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
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
const gitHubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const yahooProvider = new OAuthProvider("yahoo.com");

facebookProvider.setCustomParameters({
  display: "popup",
});

yahooProvider.setCustomParameters({
  prompt: "login",
  language: "en",
});

yahooProvider.addScope("mail-r");
// Request read/write access to user contacts.
// This must be preconfigured in the app's API permissions.
yahooProvider.addScope("sdct-w");

const AuthProvider = (props) => {
  const {
    run,
    status,
    error,
    data: user,
    setData: setUser,
    isIdle,
    isLoading,
    isSuccess,
    isError,
  } = useAsync();
  console.log(error);

  const { setIsOpen } = useModal();

  const loginWithGoogle = async () => {
    run(signInWithPopup(auth, googleProvider));
    setIsOpen(false);
  };

  const loginWithGitHub = async () => {
    run(signInWithRedirect(auth, gitHubProvider));
    setIsOpen(false);
  };

  const loginWithFacebook = async () => {
    run(signInWithRedirect(auth, facebookProvider));
  };

  const loginWithYahoo = async () => {
    run(signInWithPopup(auth, yahooProvider));
  };

  const logout = () => {
    auth.signOut();
    setUser(null);
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

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
          loginWithGoogle,
          loginWithGitHub,
          loginWithFacebook,
          loginWithYahoo,
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
