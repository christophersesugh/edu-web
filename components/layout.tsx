import React from "react";
import { AlertProvider } from "context/alert-context";
import { AuthProvider } from "context/auth-context";
import { AppAlert } from "./alert";
import { Navbar } from "./nav-bar";
import { Footer } from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AlertProvider>
      <AuthProvider>
        <AppAlert>
          <Navbar />
          {children}
          <Footer />
        </AppAlert>
      </AuthProvider>
    </AlertProvider>
  );
}
