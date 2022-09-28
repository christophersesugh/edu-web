import React from "react";

const ToggleContext = React.createContext();
ToggleContext.displayName = "ToggleContext";

export default function Modal(props) {
  const [isOpen, setIsOpen] = React.useState(true);
  return <ToggleContext.Provider value={{ isOpen, setIsOpen }} {...props} />;
}

const ModalContent = ({ children }) => {
  const { isOpen } = useModal();
  return (
    <>
      {isOpen ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center drop-shadow-lg bg-green-200/70">
          <div className="p-4 border-2 w-auto h-auto absolute rounded-md flex flex-col bg-slate-100 ">
            <ModalButton />
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

const ModalButton = (props) => {
  const { setIsOpen } = useModal();

  return (
    <button
      onClick={() => setIsOpen("none")}
      {...props}
      className="border-2 text-xl border-red-500 px-2 rounded text-red-400 self-end mb-4"
    >
      &times;
    </button>
  );
};

const useModal = () => {
  const context = React.useContext(ToggleContext);
  if (context === undefined) {
    throw new Error(`useModal must be used within a Modal`);
  }
  return context;
};

export { Modal, useModal, ModalContent, ModalButton };
