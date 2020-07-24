import React from "react";
import Modal from "react-modal";

export const ConfirmationModal = ({
  isOpen,
  onConfirm,
  onClose,
  appElement,
}) => {
  return (
    <Modal
      className="video-modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      appElement={appElement}
    >
      <p>
        This will remove all the movies from your list. Are you sure you want to
        do that?
      </p>
      <div className="container--flex-row">
        <button className="button video-modal__button" onClick={onConfirm}>
          Yes, start over.
        </button>
        <button
          className="button button--secondary video-modal__button"
          onClick={onClose}
        >
          No, keep my movies.
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
