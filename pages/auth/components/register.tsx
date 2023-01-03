import React from "react";
import Form from "./form";

type RegisterProps = {
  isRegistered: boolean;
  setIsRegistered: (isRegistered: boolean) => void;
};

export default function Register({
  isRegistered,
  setIsRegistered,
}: RegisterProps) {
  return (
    <Form
      isRegistered={isRegistered}
      setIsRegistered={setIsRegistered}
      onSubmit={() => 2}
    />
  );
}
