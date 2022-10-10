import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/error-falback";
import Header from "../components/header";
import Testimonial from "../components/testimonial";
import About from "../components/about";
import Team from "../components/team";
import AppHead from "../components/app-head";
export default function Home() {
  return (
    <>
      <AppHead title="Edu Web" />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.history.go()}
      >
        <main>
          <Header />
          <About />
          <Testimonial />
          <Team />
        </main>
      </ErrorBoundary>
    </>
  );
}
