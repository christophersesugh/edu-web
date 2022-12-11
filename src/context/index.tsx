import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "../footer";
import { Navbar } from "../header/nav-bar";
import { AlertProvider } from "./alert-context";
import { AuthModalProvider } from "./auth-modal-context";

export function AppProviders({ children }: { children: JSX.Element }) {
  return (
    <Router>
      <AlertProvider>
        <AuthModalProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthModalProvider>
      </AlertProvider>
    </Router>
  );
}
