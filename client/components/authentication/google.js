import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function Google({ onClick }) {
  return (
    <button
      className="text-3xl bg-slate-700 hover:text-green-700 p-2 rounded-full text-slate-300 flex items-center justify-evenly w-[50%]"
      onClick={onClick}
    >
      <FaGoogle className="inline mr-4" /> <span>Google</span>
    </button>
  );
}
