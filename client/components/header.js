import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[url('/assets/images/hero-bg.svg')] bg-center bg-no-repeat bg-cover p-4 lex flex-col items-center justify-center  md:mb-[8rem]">
      <div className="max-w-lg  mx-auto capitalize ">
        <img
          src="/assets/images/header.jpg"
          alt="header"
          className="w-full rounded-tl-3xl rounded-md rounded-br-3xl mt-8 bg-inherit mb-8"
        />
        <h1 className="text-[2rem] text-bold-[600] mb-8">
          learn <span className="text-green-600">data structures</span> and
          <span className="text-green-600"> algorithms</span>, efficiently.
        </h1>
        <p className="my-4 text-xl">
          Build robust knowledge of data structures and algorithms.
        </p>

        <Link href="/enroll">
          <button className="capitalize text-3xl bg-green-600 rounded p-2 text-slate-200 inline mb-12">
            enroll
          </button>
        </Link>
      </div>
    </header>
  );
}
