import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useFetchQuery } from "../../utils/hooks/queries";
import { client } from "../../utils/api-client";
import { useAuth } from "../../context/auth-context";

export default function Enroll() {
  const { user, checkAuth } = useAuth();
  React.useEffect(() => {
    checkAuth("/");
  }, [user]);
  // const { data } = useFetchQuery();
  // console.log(data);
  return <div>index</div>;
}
