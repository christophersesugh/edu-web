import React from "react";
import CheckUser from "./check-user";

export default function Layout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const user = null;
  return <CheckUser user={user}>{children}</CheckUser>;
}
