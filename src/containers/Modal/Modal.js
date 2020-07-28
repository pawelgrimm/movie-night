import React from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";
import { closeModal } from "./service/actions";

const mapStateToProps = ({ modal }) => ({
  isOpen: modal.isOpen,
  children: modal.children,
  appElement: modal.appElement,
});
const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export const Modal = ({ isOpen, children, appElement, closeModal }) => {
  return (
    <ReactModal
      className="modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
      appElement={appElement}
    >
      {children}
    </ReactModal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
