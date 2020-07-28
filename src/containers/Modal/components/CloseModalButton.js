import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { closeModal as closeModalAction } from "../service/actions";
import Button from "../../../components/Button/Button";

const CloseModalButton = () => {
  const dispatch = useDispatch();
  const closeModal = useCallback(() => dispatch(closeModalAction()), []);

  return (
    <Button className="modal__button" onClick={closeModal}>
      Close
    </Button>
  );
};

export default CloseModalButton;
