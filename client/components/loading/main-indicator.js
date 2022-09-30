import React from "react";

export default function MainIndicator() {
  return (
    <div className="max-w-xs mx-auto h-[100vh] flex justify-center items-center">
      <div>
        <img src="/favicon.svg" alt="icon" className="animate-spin inline" />
        {"  "}
        <span className="text-3xl animate-pulse">Loading...</span>
      </div>
    </div>
  );
}
