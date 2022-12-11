import React from "react";
type AlertContextProps = {
  showAlert: boolean;
  setShowAlert: (showAlert: boolean) => void;
};

const AlertContext = React.createContext<AlertContextProps | undefined>(undefined);

const AlertProvider = (props) => {
  const [showAlert, setShowAlert] = React.useState(true);
  return <AlertContext.Provider value={{ showAlert, setShowAlert }} {...props} />;
};

const useAlert = () => {
  const context = React.useContext(AlertContext);
  if (context === undefined) {
    throw new Error(`useAlert must be used within an AlertProvider`);
  }
  return context;
};

export { AlertProvider, useAlert };
