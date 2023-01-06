import React from "react";
import Link from "next/link";

export default function CreateButton() {
  return (
    <Link href="/create">
      <button className="fixed bottom-12 right-12 rounded-full bg-zinc-500 text-3xl text-white px-4 py-2">
        +
      </button>
    </Link>
  );
}
