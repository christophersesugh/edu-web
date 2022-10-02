import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/error-falback";
import Header from "../components/header";
import Testimonial from "../components/testimonial";
import About from "../components/about";
import Team from "../components/team";
import AppHeader from "../components/app-header";
export default function Home() {
  return (
    <>
      <AppHeader title="Edu Web" />
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
