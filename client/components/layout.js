import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ErrorFallback from "./error-falback";
import { AuthProvider } from "../context/auth-context";
import { ModalProvider, useModal } from "../context/modal-context";
import Navbar from "./navbar";
import Footer from "../components/footer";
import { Modal, ModalButton, ModalContent } from "./modal";
import Auth from "./authentication/index.js";

const queryClient = new QueryClient({
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry(failureCount, error) {
      if (error.status === 404) return false;
      else if (failureCount < 2) return true;
      else return false;
    },
  },
});

export default function Layout({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.history.go()}
    >
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <AuthProvider>
            <Navbar />
            <AppModal />
            {children}
            <Footer />
          </AuthProvider>
        </ModalProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

function AppModal() {
  const { isOpen, setIsOpen } = useModal();
  const handleModalOpen = () => setIsOpen(!isOpen);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalContent>
        <ModalButton onClick={handleModalOpen} />
        <Auth />
      </ModalContent>
    </Modal>
  );
}
