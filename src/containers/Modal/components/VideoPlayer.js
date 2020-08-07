import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoPlayer = ({ videoKey }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`;

  return <ReactPlayer className="modal__video" url={videoUrl} />;
};

export default VideoPlayer;
