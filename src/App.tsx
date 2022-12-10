import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import AppRoutes from "./app-routes";
import { ErrorFallback } from "./error-fallback";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.history.go()}>
      <AppRoutes />
    </ErrorBoundary>
  );
}
