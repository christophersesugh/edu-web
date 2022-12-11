type DialogButtonProps = {
  onClick: () => void;
  props?: JSX.Element;
};

export const DialogButton = ({ onClick, props }: DialogButtonProps) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className="border-2 text-xl border-red-700 px-2 rounded text-red-700 self-end mb-4"
    >
      &times;
    </button>
  );
};
