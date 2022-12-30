import React from "react";
type AuthModalContextProps = {
  alert: {
    message: string;
    status: "success" | "warning" | "error" | "loading";
    showAlert: boolean;
    onClick?: any;
  };
  setAlert: React.Dispatch<
    React.SetStateAction<{
      message: string;
      status: string;
      showAlert: boolean;
      onClick?: any;
    }>
  >;
};

const AlertContext = React.createContext<AuthModalContextProps | undefined>(
  undefined
);

const AlertProvider = (props: any) => {
  const [alert, setAlert] = React.useState({
    message: "",
    status: "",
    showAlert: false,
  });

  React.useEffect(() => {
    let timeout: number;
    if (alert.status !== "loading") {
      timeout = window.setTimeout(() => {
        setAlert({
          ...alert,
          showAlert: false,
        });
      }, 3000);
    }
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
