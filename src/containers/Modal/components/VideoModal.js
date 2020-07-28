import React from "react";
import VideoPlayer from "./VideoPlayer";
import CloseModalButton from "./CloseModalButton";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";

export const VideoModal = ({ videos = [] }) => {
  const key = videos.length > 0 && videos[0].key;
  if (!key) {
    return;
  }

  return (
    <>
      <VideoPlayer videoKey={key} />
      <ButtonGroup>
        <CloseModalButton />
      </ButtonGroup>
    </>
  );
};

export default VideoModal;
