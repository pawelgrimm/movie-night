import React from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";
import { closeModal } from "./service/actions";

const mapStateToProps = ({ modal }) => ({
  isOpen: modal.isOpen,
  children: modal.children,
});
const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export const Modal = ({ isOpen, videos = [], appElement, closeModal }) => {
  const key = videos.length > 0 && videos[0].key;
  const videoUrl = `https://www.youtube.com/watch?v=${key}`;
  return (
    <ReactModal
      className="modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
      appElement={appElement}
    >
      <ReactPlayer className="video-modal__video" url={videoUrl} />
      <button
        className="button button--secondary video-modal__button"
        onClick={closeModal}
      >
        Close
      </button>
    </ReactModal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
