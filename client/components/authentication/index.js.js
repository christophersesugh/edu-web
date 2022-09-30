import React from "react";
import Google from "./google";
import Github from "./github";
import Facebook from "./facebook";
import Yahoo from "./yahoo";

export default function Auth() {
  return (
    <div className="max-w-md flex flex-col items-center justify-center">
      <img src="/favicon.svg" alt="logo" className="w-16 mb-4" />
      <p className="text-2xl mb-8 capitalize text-stone-800">sign in with</p>
      <div className="flex gap-12 w-full bg-slate-200 p-8 rounded justify-center">
        <Google />
        <Github />
        <Facebook />
        <Yahoo />
      </div>
      <p className="mt-4 text-center text-stone-800">
        By signing in, you agree to our{" "}
        <span className="capitalize text-slate-300">terms of servive</span> and{" "}
        <span className="capitalize text-slate-300">privacy policy</span>
      </p>
    </div>
  );
}
