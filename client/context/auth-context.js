import React from "react";

const AuthContext = React.createContext();

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
