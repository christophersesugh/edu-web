import Link from "next/link";
import React from "react";

export default function UnauthenticatedApp() {
  return (
    <div>
      unauthenticated-app
      <Link href="/test">
        <button>test</button>
      </Link>
    </div>
  );
}
