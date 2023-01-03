import React from "react";
import { ThemeProvider } from "context/theme-context";
import { AlertProvider } from "context/alert-context";
import { AppAlert } from "./alert";
import { Navbar } from "./nav-bar";
import { Footer } from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AlertProvider>
        <AppAlert>
          <Navbar />
          {children}
          <Footer />
        </AppAlert>
      </AlertProvider>
    </ThemeProvider>
  );
}
