import React from "react";
type AuthModalContextProps = {
  showAuthModal: boolean;
  setShowAuthModal: (showAuthModal: boolean) => void;
};

const AuthModalContext = React.createContext<AuthModalContextProps | undefined>(undefined);

const AuthModalProvider = (props) => {
  const [showAuthModal, setShowAuthModal] = React.useState(true);
  return <AuthModalContext.Provider value={{ showAuthModal, setShowAuthModal }} {...props} />;
};

const useAuthModal = () => {
  const context = React.useContext(AuthModalContext);
  if (context === undefined) {
    throw new Error(`useAlert must be used within an AlertProvider`);
  }
  return context;
};

export { AuthModalProvider, useAuthModal };
