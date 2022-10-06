import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useFetchQuery } from "../../utils/hooks/queries";
import { client } from "../../utils/api-client";

export default function Enroll() {
  const { data } = useFetchQuery();
  console.log(data);
  return <div>index</div>;
}
