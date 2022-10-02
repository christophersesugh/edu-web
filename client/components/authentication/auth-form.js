import React from "react";
import { useAsync } from "../../utils/hooks/use-async";

export default function AuthForm({ onSubmit }) {
  const { run, isError, error, isLoading } = useAsync();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    run(onSubmit({ email: email.value, password: password.value }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
      <div className="w-full">
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
      <button
        type="submit"
        className="mt-4 bg-green-500 p-2 rounded-md flex items-center"
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
        <p className="text-red-700 my-4">
          {error.message.substring(22, error.message.length - 2)}
        </p>
      ) : null}
    </form>
  );
}
