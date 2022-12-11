import React from "react";

type DialogProps = {
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
  children: React.ReactNode | React.ReactNode[];
};

export function Dialog({ isDialogOpen, setIsDialogOpen, children }: DialogProps) {
  return React.Children.map(children, (child: any) => {
    return React.cloneElement(child, { isDialogOpen, setIsDialogOpen, children });
  });
}
