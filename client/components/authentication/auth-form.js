import React from "react";
import { useAsync } from "../../utils/hooks/use-async";
import Google from "./google";
import { useAuth } from "../../context/auth-context";

export default function AuthForm({ onSubmit }) {
  const { loginWithGoogle } = useAuth();
  const { run, isError, error, isLoading } = useAsync();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    run(onSubmit({ email: email.value, password: password.value }));
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center justify-center"
    >
      <div className="w-full mb-4">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          required
          className="w-full p-2 rounded-md focus:outline-green-500"
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          required
          className="w-full p-2 rounded-md focus:outline-green-500"
        />
      </div>
      <p className="mb-2">OR</p>
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
