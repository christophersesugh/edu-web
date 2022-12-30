import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineWarning } from "react-icons/ai";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";

type AlertProps = {
  message: string;
  status: string;
  alert: boolean;
};

export function Alert({ message, status, alert }: AlertProps) {
  return alert ? (
    <div
      role="alert"
      className={`fixed top-0 left-0 h-screen w-screen ${
        status === "success"
          ? "bg-green-50/80"
          : status === "warning"
          ? "bg-yellow-50/80"
          : status === "error"
          ? "bg-red-50/80"
          : status === "loading"
          ? "bg-slate-100/90"
          : null
      } grid items-start justify-center pt-12 z-20`}
    >
      <div
        className={`${
          status === "success"
            ? "bg-green-500"
            : status === "warning"
            ? "bg-yellow-500"
            : status === "error"
            ? "bg-red-500"
            : status === "loading"
            ? "bg-slate-500"
            : null
        } flex flex-col sm:flex-row gap-2 items-center h-auto sm:h-12 xs:mx-4 md:mx-0 md:h-8  p-8 rounded text-slate-50`}
      >
        <span className="text-3xl">
          {status === "warning" ? (
            <AiOutlineWarning />
          ) : status === "success" ? (
            <IoMdCheckmark />
          ) : status === "error" ? (
            <MdOutlineErrorOutline />
          ) : (
            <FaSpinner className="animate-spin" />
          )}
        </span>
        <span className="text-lg">{message}</span>
      </div>
    </div>
  ) : null;
}
