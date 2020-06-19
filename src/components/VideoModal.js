import React from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";

const VideoModal = ({ modalIsOpen, toggleModal }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={toggleModal}>
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </Modal>
  );
};

export default VideoModal;
