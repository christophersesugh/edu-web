import React from "react";
import Form from "./form";

type LoginProps = {
  isRegistered: boolean;
  setIsRegistered: (isRegistered: boolean) => void;
};

export default function Login({ isRegistered, setIsRegistered }: LoginProps) {
  return (
    <Form
      isRegistered={isRegistered}
      setIsRegistered={setIsRegistered}
      onSubmit={() => 1}
    />
  );
}
