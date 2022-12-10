import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "../footer";
import { Navbar } from "../header/nav-bar";

export function AppProviders({ children }: { children: JSX.Element }) {
  return (
    <Router>
      <Navbar />
      {children}
      <Footer />
    </Router>
  );
}
