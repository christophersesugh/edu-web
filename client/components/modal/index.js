import React from "react";

const ToggleContext = React.createContext();
ToggleContext.displayName = "ToggleContext";

// export default function Modal(props) {
//   const [isOpen, setIsOpen] = React.useState(true);
//   return <ToggleContext.Provider value={{ isOpen, setIsOpen }} {...props} />;
// }

function Modal({ isOpen, setIsOpen, children }) {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { isOpen, setIsOpen, ...children });
  });
}

const ModalContent = ({ isOpen, children }) => {
  return (
    <>
      {isOpen ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center drop-shadow-lg bg-zinc-200/70">
          <div className="p-4 border-2 border-green-500 w-auto h-auto absolute rounded-md flex flex-col bg-slate-100 ">
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

const ModalButton = ({ onClick, props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className="border-2 text-xl border-red-500 px-2 rounded text-red-400 self-end mb-4"
    >
      &times;
    </button>
  );
};

export { Modal, ModalContent, ModalButton };
