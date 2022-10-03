import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useAsync } from "../../utils/hooks/use-async";

export default function Google({ onClick }) {
  const { run, reset, isError, isLoading, error } = useAsync();
  const handleClick = () => {
    if (isError) {
      reset();
    } else {
      run(onClick());
    }
  };
  return (
    <button
      className="text-3xl bg-slate-700 hover:text-green-700 p-2 rounded-full text-slate-300 flex items-center justify-evenly w-auto"
      onClick={handleClick}
    >
      {isLoading ? (
        <img src="/favicon.svg" alt="logo" className="animate-spin w-8" />
      ) : (
        <FaGoogle />
      )}
      {isError ? "&times;" : null}
    </button>
  );
}
