import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/error-falback";
import Header from "../components/header";
import Testimonial from "../components/testimonial";
import About from "../components/about";
import Team from "../components/team";
import { Modal, ModalContent, ModalButton } from "../components/modal";
import AppHeader from "../components/app-header";
import { useModal } from "../context/modal-context";
import MainIndicator from "../components/loading/main-indicator";

export default function Home() {
  const { isOpen, setIsOpen } = useModal();
  const handleModalOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <AppHeader title="Edu Web" />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.history.go()}
      >
        <main>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <ModalContent>
              <ModalButton onClick={handleModalOpen} />
              some content
            </ModalContent>
          </Modal>
          <Header />
          <About />
          <Testimonial />
          <Team />
        </main>
      </ErrorBoundary>
    </>
  );
}
