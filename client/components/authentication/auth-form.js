import React from "react";
import { useAsync } from "../../utils/hooks/use-async";
import Google from "./google";
import { useAuth } from "../../context/auth-context";
import FormInput from "../form-input";

export default function AuthForm({ onSubmit }) {
  const { loginWithGoogle } = useAuth();
  const { run, reset, isError, error, isLoading } = useAsync();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    if (isError) {
      reset();
    } else {
      run(onSubmit({ email: email.value, password: password.value }));
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center justify-center"
    >
      <div className="w-full mb-4">
        <FormInput
          type="email"
          placeholder="Email"
          name="email"
          required={true}
        />
      </div>
      <div className="w-full mb-4">
        <FormInput
          type="password"
          placeholder="Password"
          name="password"
          required={true}
        />
      </div>
      <p className="mb-2">signin with</p>
      <Google onClick={loginWithGoogle} />
      <button
        type="submit"
        className="my-4 bg-green-500 p-2 rounded-md flex items-center w-full justify-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <img
            src="/favicon.svg"
            alt="icon"
            className="animate-spin inline w-6"
          />
        ) : null}{" "}
        Submit
      </button>
      {isError ? (
        <p className="text-red-700 my-4 text-center">
          {error.message.substring(22, error.message.length - 2)}
        </p>
      ) : null}
    </form>
  );
}
