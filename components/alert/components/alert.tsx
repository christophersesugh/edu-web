import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineWarning } from "react-icons/ai";
import { MdOutlineErrorOutline } from "react-icons/md";

type AlertProps = {
  message: string;
  status: "green" | "yellow" | "red";
  alert: boolean;
  //   setAlert: (alert: boolean) => void;
};

export function Alert({ message, status, alert }: AlertProps) {
  return alert ? (
    <div
      role="alert"
      className="fixed top-0 left-0 h-screen w-screen bg-transparent grid items-start justify-center pt-8"
    >
      <div
        className={`flex gap-2 items-center h-8 bg-${status}-500 p-8 rounded text-slate-50`}
      >
        <span className="text-3xl">
          {status === "yellow" ? (
            <AiOutlineWarning />
          ) : status === "green" ? (
            <IoMdCheckmark />
          ) : (
            <MdOutlineErrorOutline />
          )}
        </span>
        <span className="text-xl">{message}</span>
      </div>
    </div>
  ) : null;
}
