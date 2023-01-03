import React from "react";
import Form from "./form";
import { useAuth } from "context/auth-context";

type RegisterProps = {
  isRegistered: boolean;
  setIsRegistered: (isRegistered: boolean) => void;
};

export default function Register({
  isRegistered,
  setIsRegistered,
}: RegisterProps) {
  const { register } = useAuth();
  return (
    <Form
      isRegistered={isRegistered}
      setIsRegistered={setIsRegistered}
      onSubmit={register}
    />
  );
}
