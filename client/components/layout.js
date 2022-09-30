import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthProvider } from "../context/auth-context";
import { ModalProvider } from "../context/modal-context";
import Navbar from "./navbar";
import Footer from "../components/footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export default function Layout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ModalProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
