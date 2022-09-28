import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/auth-context";

export default function Test() {
  const router = useRouter();
  const { user } = useAuth();
  React.useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);
  return (
    <>
      <h1>test</h1>
      <Link href="/">
        <button>home</button>
      </Link>
    </>
  );
}
