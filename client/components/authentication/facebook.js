import React from "react";
import { BsFacebook } from "react-icons/bs";

export default function Facebook({ onClick }) {
  return (
    <button
      className="text-3xl bg-slate-700 hover:text-green-700 p-2 rounded-full text-slate-300"
      onClick={onClick}
    >
      <BsFacebook />
    </button>
  );
}
