import React from "react";
import Button from "../../../components/Button/Button";
import { useModal } from "../ModalContext";

const ConfirmModalButton = ({ text = "Confirm", onConfirm }) => {
  const { closeModal } = useModal();
  const confirmAndClose = () => {
    onConfirm();
    closeModal();
  };

  return (
    <Button className="modal__button" onClick={confirmAndClose}>
      {text}
    </Button>
  );
};

export default ConfirmModalButton;
