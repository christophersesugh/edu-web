import React from "react";
import Link from "next/link";

export default function CourseCard({ language }: any) {
  return (
    <Link href={`/${language}`}>
      <article className="border-2 rounded text-center border-zinc-300 bg-zinc-200 p-8">
        <h1 className="text-3xl text-bold capitalize text-zinc-500 mb-4">
          {language}
        </h1>
        <p>
          Learn data structures and algorithms in{" "}
          <span className="text-slate-00">{language}</span>.
        </p>
      </article>
    </Link>
  );
}
