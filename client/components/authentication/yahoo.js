import React from "react";
import { FaYahoo } from "react-icons/fa";

export default function Yahoo({ onClick }) {
  return (
    <button
      className="text-3xl bg-slate-700 hover:text-green-700 p-2 rounded-full text-slate-300"
      onClick={onClick}
    >
      <FaYahoo />
    </button>
  );
}
