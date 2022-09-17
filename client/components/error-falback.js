import React from "react";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={resetErrorBoundary}>refresh</button>
    </div>
  );
}
