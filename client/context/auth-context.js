import React from "react";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

const AuthProvider = (props) => {
  let user = null;
  return <AuthContext.Provider value={{ user }} {...props} />;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
};

export { useAuth, AuthProvider };
