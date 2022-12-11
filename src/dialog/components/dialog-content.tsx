type DialogContentProps = {
  isDialogOpen: boolean;
  children: React.ReactNode;
};

export const DialogContent = ({ isDialogOpen, children }: DialogContentProps) => {
  return (
    <>
      {isDialogOpen ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center drop-shadow-lg bg-zinc-300/90 z-10">
          <div className="p-4 border-2 border-green-500 w-auto h-auto absolute rounded-md flex flex-col bg-slate-400 transition duration-300">
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};
