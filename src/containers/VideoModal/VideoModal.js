import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { closeModal } from "./service/actions";

const mapStateToProps = ({ videoModal }) => ({
  isOpen: videoModal.isOpen,
  videos: videoModal.videos,
});
const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export const VideoModal = ({ isOpen, videos = [], appElement, closeModal }) => {
  const key = videos.length > 0 && videos[0].key;
  const videoUrl = `https://www.youtube.com/watch?v=${key}`;
  return (
    <Modal
      className="video-modal"
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
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoModal);
