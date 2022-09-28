import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function MainIndicator() {
  return (
    <div className="max-w-xs mx-auto h-[100vh] flex items-center">
      <FaSpinner className="w-full animate-spin text-[100px] text-green-600"></FaSpinner>
      <img src="/assets/" alt="" />
    </div>
  );
}
