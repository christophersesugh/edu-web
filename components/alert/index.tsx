import React from "react";
import { useAlert } from "context/alert-context";
import { Alert } from "./components/alert";

function AppAlert({ children }: any) {
  const { alert } = useAlert();
  return (
    <>
      <Alert alert={alert} />
      {children}
    </>
  );
}

export { AppAlert };
