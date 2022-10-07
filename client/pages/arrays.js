import React from "react";
import { useAuth } from "../context/auth-context";

export default function Arrays() {
  const { user, checkAuth } = useAuth();
  React.useEffect(() => {
    checkAuth("/");
  }, [user]);
  return <div>arrays</div>;
}
