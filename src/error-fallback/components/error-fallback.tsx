import React from "react";

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      Error fallback {error}
      <button onClick={resetErrorBoundary}> try again </button>
    </div>
  );
}
