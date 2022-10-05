import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GiCancel } from "react-icons/gi";
import { useAsync } from "../../utils/hooks/use-async";

export default function Google({ onClick }) {
  const { run, reset, isError, isLoading } = useAsync();
  const handleClick = () => {
    if (isError) {
      reset();
    } else {
      run(onClick());
    }
  };
  return (
    <button
      className="text-3xl bg-slate-700 hover:text-green-700 p-2 rounded-full text-slate-300 flex items-center justify-center w-auto w-full"
      onClick={handleClick}
      type="button"
    >
      {isLoading ? (
        <img src="/favicon.svg" alt="logo" className="animate-spin w-8" />
      ) : isError ? (
        <div className="text-red-500 flex items-center">
          <GiCancel />
        </div>
      ) : (
        <>
          <FcGoogle />
        </>
      )}
    </button>
  );
}
