import React from "react";
import Link from "next/link";

export default function Test() {
  return (
    <>
      <h1>test</h1>
      <Link href="/">
        <button>home</button>
      </Link>
    </>
  );
}
