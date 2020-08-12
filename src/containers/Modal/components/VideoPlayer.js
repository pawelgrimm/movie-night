import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoPlayer = ({ videoKey }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`;

  return (
    <div className="modal__video video-player__wrapper">
      <ReactPlayer
        className="video-player"
        url={videoUrl}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
