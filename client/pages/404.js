import Link from "next/link";
import React from "react";

export default function ErrorPage() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-about bg-contain bg-center bg-no-repeat">
      <h1 className="text-green-500 mb-8 text-[8rem]">404</h1>
      <h2 className="text-green-500 mb-8 text-2xl capitalize">
        oops! it's a dead end.
      </h2>
      <p className="text-xl text-green-500 capitalize mb-8">page not found</p>

      <Link href="/">
        <button className="bg-green-400 text-slate-100 uppercase px-4 py-2 rounded text-xl">
          home
        </button>
      </Link>
    </div>
  );
}
