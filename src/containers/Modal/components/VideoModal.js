import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { closeModal as closeModalAction } from "../service/actions";

export const VideoModal = ({ videos = [] }) => {
  const dispatch = useDispatch();
  const closeModal = useCallback(() => dispatch(closeModalAction()), []);

  const key = videos.length > 0 && videos[0].key;
  if (!key) {
    return;
  }

  const videoUrl = `https://www.youtube.com/watch?v=${key}`;
  return (
    <>
      <p>This is the new modal</p>
      <ReactPlayer className="video-modal__video" url={videoUrl} />
      <button
        className="button button--secondary video-modal__button"
        onClick={closeModal}
      >
        Close
      </button>
    </>
  );
};

export default VideoModal;
