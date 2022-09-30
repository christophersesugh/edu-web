import React from "react";

function Modal({ isOpen, setIsOpen, children }) {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { isOpen, setIsOpen, ...children });
  });
}

const ModalContent = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      {isOpen ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center drop-shadow-lg bg-zinc-200/70">
          <div className="p-4 border-2 border-green-500 w-auto h-auto absolute rounded-md flex flex-col bg-slate-100 scale-100 duration-300">
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
