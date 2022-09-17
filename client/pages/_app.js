import React from "react";
import "../styles/globals.css";

const AuthenticatedApp = React.lazy(() =>
  import(/*webpackPrefetch: true*/ "./authenticated-app")
);
const UnauthenticatedApp = React.lazy(() => import("./unauthenticated-app"));

function MyApp({ Component, pageProps }) {
  let user = false;
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      {user ? (
        <AuthenticatedApp>
          <Component {...pageProps} />
        </AuthenticatedApp>
      ) : (
        <UnauthenticatedApp />
      )}
    </React.Suspense>
  );
}

export default MyApp;
