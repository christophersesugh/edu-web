import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleAuth() {
  return (
    <button
      className="flex w-full mt-6 justify-center bg-zinc-300 border-2 p-2  rounded items-center"
      type="button"
    >
      <FcGoogle className="inline mr-2 text-2xl" />
      <span>Sign in with google</span>
    </button>
  );
}
