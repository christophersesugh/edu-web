import React from "react";
import Head from "next/head";

export default function AppHead({ title, customHeaders } = {}) {
  return (
    <Head>
      <title>{title}</title>
      {customHeaders}
    </Head>
  );
}
