import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { closeModal as closeModalAction } from "../service/actions";
import Button from "../../../components/Button/Button";

const CloseModalButton = ({ text = "Close" }) => {
  const dispatch = useDispatch();
  const closeModal = useCallback(() => dispatch(closeModalAction()), []);

  return (
    <Button type="secondary" className="modal__button" onClick={closeModal}>
      {text}
    </Button>
  );
};

export default CloseModalButton;
