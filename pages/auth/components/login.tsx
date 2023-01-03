import React from "react";
import Form from "./form";
import { useAuth } from "context/auth-context";

type LoginProps = {
  isRegistered: boolean;
  setIsRegistered: (isRegistered: boolean) => void;
};

export default function Login({ isRegistered, setIsRegistered }: LoginProps) {
  const { login } = useAuth();
  console.log("Login");

  return (
    <Form
      isRegistered={isRegistered}
      setIsRegistered={setIsRegistered}
      onSubmit={login}
    />
  );
}
