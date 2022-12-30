import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { useAlert } from "context/alert-context";
import AlertIcon from "./alert-icon";
import AlertButton from "./alert-button";

type AlertProps = {
  alert: {
    message: string;
    status: "success" | "warning" | "error" | "loading";
    showAlert: boolean;
    onClick?: () => void;
  };
};

export function Alert({ alert }: AlertProps) {
  const { setAlert } = useAlert();
  const { message, status, showAlert, onClick } = alert;
  return showAlert ? (
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
        }  h-auto flex flex-col gap-4  items-center justify-center xs:mx-4 md:mx-0 md:h-8  p-8 rounded text-slate-50`}
      >
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <AlertIcon status={status} />
          <span className="text-lg text-white">{message}</span>
        </div>
        <div>
          {onClick ? (
            <AlertButton
              className="bg-green-500 border-white text-white rounded p-1 mr-2"
              onClick={onClick}
              icon={<IoMdCheckmark className="text-xl" />}
            />
          ) : null}
          <AlertButton
            className="bg-white border-white rounded p-1"
            onClick={() => setAlert({ ...alert, showAlert: false })}
            icon={<FaTimes className="text-red-400 text-xl" />}
          />
        </div>
      </div>
    </div>
  ) : null;
}
