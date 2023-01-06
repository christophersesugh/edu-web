import React from "react";
import FormInput from "../../../components/form-input";
import GoogleAuth from "./google-auth";
import { useAsync } from "utils/hooks/use-async";
import FormFooter from "./form-footer";
interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
interface UserFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}
interface FormProps {
  onSubmit: ({ email, password }: { email: string; password: string }) => void;
  isRegistered: boolean;
  setIsRegistered: (isRegistered: boolean) => void;
}

export default function Form({
  onSubmit,
  isRegistered,
  setIsRegistered,
}: FormProps) {
  const { run, error, reset, isError, isLoading } = useAsync();
  function handleFormSubmit(event: React.FormEvent<UserFormElements>) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (isError) {
      reset();
    } else {
      run(
        onSubmit({
          email: email.value,
          password: password.value,
        })
      );
    }
    email.value = "";
    password.value = "";
  }

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        autoComplete="off"
        className="sm:w-[70vw] lg:w-[30vw] md:w-[40vw] rounded border-2 border-zinc-600 bg-zinc-300 text-zinc-600 dark:text-zinc-200 dark:bg-zinc-400 p-4"
      >
        <h1 className="text-center text-2xl">
          {isRegistered ? "Login" : "Register"}
        </h1>
        <FormInput type="email" placeholder="Email" id="email" />
        <FormInput type="password" placeholder="Password" id="password" />
        <button
          className={`rounded w-full mt-10 p-2 bg-zinc-400 border-2 border-zinc-50 text-zinc-50 ${
            error ? "text-red-700" : null
          }`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading
            ? "Loading..."
            : isError
            ? error.message
                .substring(22, error.message.length - 2)
                .split("-")
                .join(" ")
            : "Submit"}
        </button>
        <div className="mt-6 text-center">OR</div>
        <GoogleAuth />
        <FormFooter
          isRegistered={isRegistered}
          setIsRegistered={setIsRegistered}
        />
      </form>
    </>
  );
}
