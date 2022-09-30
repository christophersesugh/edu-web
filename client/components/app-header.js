import React from "react";
import Head from "next/head";

export default function AppHeader({ title, customHeaders } = {}) {
  return (
    <Head>
      <title>{title}</title>
      {customHeaders}
    </Head>
  );
}
