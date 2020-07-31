import React from "react";
import { useVideoModal } from "../../Modal/components/VideoModal";
import Button from "../../../components/Button/Button";

const WatchTrailerButton = ({ videos = [] }) => {
  const { openModal } = useVideoModal(videos);

  return (
    <Button
      disabled={videos.length === 0}
      onClick={(event) => {
        event.stopPropagation();
        openModal(videos);
      }}
    >
      Watch Trailer
    </Button>
  );
};

export default WatchTrailerButton;
