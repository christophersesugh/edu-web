import React from "react";
import { Dialog } from "./dialog";
import { DialogButton } from "./dialog-button";
import { DialogContent } from "./dialog-content";

type ModalProps = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  children: React.ReactNode | React.ReactNode[];
};

export function Modal({ showModal, setShowModal, children }: ModalProps) {
  const hideModal = () => setShowModal(false);
  return (
    <Dialog isDialogOpen={showModal} setIsDialogOpen={setShowModal}>
      <DialogContent isDialogOpen={showModal}>
        <DialogButton onClick={hideModal} />
        {children}
      </DialogContent>
    </Dialog>
  );
}
