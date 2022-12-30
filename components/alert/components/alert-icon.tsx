import React from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineErrorOutline } from "react-icons/md";

export default function AlertIcon({ status }: { status: string }) {
  return (
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
  );
}
