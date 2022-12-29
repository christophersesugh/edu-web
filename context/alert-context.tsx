import React from "react";
type AuthModalContextProps = {
  alert: {
    message: string;
    status: "green" | "yellow" | "red";
    showAlert: boolean;
  };
  setAlert: (alert: {
    message: string;
    status: "green" | "yellow" | "red";
    showAlert: boolean;
  }) => void;
};

const AlertContext = React.createContext<AuthModalContextProps | undefined>(
  undefined
);

const AlertProvider = (props: any) => {
  const [alert, setAlert] = React.useState({
    message: "",
    status: "green" || "yellow" || "red",
    showAlert: false,
  });

  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      setAlert({
        ...alert,
        showAlert: false,
      });
    }, 3000);
    return () => window.clearTimeout(timeout);
  }, [alert]);

  return <AlertContext.Provider value={{ alert, setAlert }} {...props} />;
};

const useAlert = () => {
  const context = React.useContext(AlertContext);
  if (context === undefined) {
    throw new Error(`useAlert must be used within an AlertProvider`);
  }
  return context;
};

export { AlertProvider, useAlert };
