import React from "react";
import UnauthenticatedApp from "./unauth-app";
import AuthenticatedApp from "./auth-app";
export default function App() {
  const user = true;
  return (
    <React.Suspense fallback={<p>loading..</p>}>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</React.Suspense>
  );
}
