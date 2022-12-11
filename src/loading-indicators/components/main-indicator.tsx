import React from "react";

export function MainIndicator() {
  return (
    <div className="max-w-xs mx-auto h-[100vh] flex justify-center items-center">
      <div>
        <img src="../../assets/images/logo.svg" alt="icon" className="animate-spin inline" />
        {"  "}
        <span className="text-3xl animate-pulse">Loading...</span>
      </div>
    </div>
  );
}
