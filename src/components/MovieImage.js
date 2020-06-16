import ReactImageFallback from "react-image-fallback";
import React from "react";
import { getImageUrl } from "../theMovieDb/theMovieDb";

const MovieImage = ({ title, type, imageWidth, filePath, className = "" }) => {
  const imagePath = getImageUrl(type, imageWidth, filePath);
  return (
    <ReactImageFallback
      src={imagePath}
      fallbackImage="/images/default_poster.png"
      initialImage="/images/loader.gif"
      alt={`${type} image for ${title}`}
      className={className || type + "-image"}
    />
  );
};

export default MovieImage;
