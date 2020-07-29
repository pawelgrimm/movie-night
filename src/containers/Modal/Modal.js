import React, { useMemo } from "react";
import ReactModal from "react-modal";

export const Modal = ({ isOpen, contents, appElement, closeModal }) => {
  return (
    <ReactModal
      className="modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
      appElement={appElement}
    >
      {contents}
    </ReactModal>
  );
};

export default Modal;
