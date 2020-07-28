import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { closeModal as closeModalAction } from "../service/actions";
import Button from "../../../components/Button/Button";

const ConfirmModalButton = ({ text = "Confirm", onConfirm }) => {
  const dispatch = useDispatch();
  const confirmAndClose = useCallback(() => {
    onConfirm();
    dispatch(closeModalAction());
  }, []);

  return (
    <Button className="modal__button" onClick={confirmAndClose}>
      {text}
    </Button>
  );
};

export default ConfirmModalButton;
