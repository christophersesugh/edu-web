import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/error-falback";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function AuthenticatedApp({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.history.go()}
    >
      <Navbar />
      <main className="mx-4">{children}</main>
      <Footer />
    </ErrorBoundary>
  );
}
