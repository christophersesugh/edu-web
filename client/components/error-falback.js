import React from "react";
import { IoMdRefresh } from "react-icons/io";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center m-8">
      <h1 className="text-green-500 mb-8 text-2xl">{error.message}</h1>
      <button
        onClick={resetErrorBoundary}
        className="bg-green-400 text-slate-100 uppercase px-4 py-2 rounded text-xl flex items-center"
      >
        <IoMdRefresh className="inline text-slate-100" />
        refresh
      </button>
    </div>
  );
}
