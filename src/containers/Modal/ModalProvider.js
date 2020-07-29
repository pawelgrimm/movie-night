import React, { useCallback, useState } from "react";
import ModalContext from "./ModalContext";
import Modal from "./Modal";

const ModalProvider = ({ appElement, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contents, setContents] = useState(undefined);
  const openModal = useCallback((newContents) => {
    if (newContents) {
      setContents(newContents);
      setIsOpen(true);
    }
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
    setContents(undefined);
  }, []);

  const modalValues = {
    isOpen,
    openModal,
    closeModal,
  };
  return (
    <ModalContext.Provider value={modalValues}>
      {children}
      <Modal
        appElement={appElement}
        isOpen={isOpen}
        contents={contents}
        closeModal={closeModal}
      />
    </ModalContext.Provider>
  );
};

export default ModalProvider;
