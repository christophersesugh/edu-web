import React from "react";

const ModalContext = React.createContext();
ModalContext.displayName = "ModalContext";

const ModalProvider = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <ModalContext.Provider value={{ isOpen, setIsOpen }} {...props} />;
};

const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error(`useModal must be used within an ModalProvider`);
  }
  return context;
};

export { useModal, ModalProvider };
