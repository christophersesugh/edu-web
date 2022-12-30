import React from "react";

type AlertButtonProps = {
  onClick: any;
  icon: React.ReactNode;
  className: string;
};

export default function AlertButton({
  className,
  onClick,
  icon,
}: AlertButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {icon}
    </button>
  );
}
