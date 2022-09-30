import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthProvider } from "../context/auth-context";
import { ModalProvider, useModal } from "../context/modal-context";
import Navbar from "./navbar";
import Footer from "../components/footer";
import { Modal, ModalButton, ModalContent } from "./modal";
import Auth from "./authentication/index.js";
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
          <AppModal />
          {children}
          <Footer />
        </ModalProvider>
      </AuthProvider>
    </QueryClientProvider>
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
