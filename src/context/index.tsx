import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "../footer";
import { Navbar } from "../header/nav-bar";
import { AlertProvider } from "./alert-context";

export function AppProviders({ children }: { children: JSX.Element }) {
  return (
    <Router>
      <AlertProvider>
        <Navbar />
        {children}
        <Footer />
      </AlertProvider>
    </Router>
  );
}
