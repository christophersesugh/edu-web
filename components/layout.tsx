import React from "react";
import { Alert } from "./alert";
import { useAlert, AlertProvider } from "context/alert-context";
import { ThemeProvider } from "context/theme-context";
import { Footer } from "./footer";
import Navbar from "./nav-bar";

export default function Layout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
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

function AppAlert({ children }: any) {
  const { alert } = useAlert();

  return (
    <>
      <Alert
        message={alert.message}
        status={alert.status}
        alert={alert.showAlert}
      />
      {children}
    </>
  );
}
