import React from "react";
import ReactImageFallback from "react-image-fallback";
import { formatReleaseYear } from "../../utils/theMovieDb";

const MovieListItemCollapsed = ({
  title,
  releaseDate,
  genres,
  runtime,
  voteAverage,
  posterPath,
  onClick,
  buttons = [],
}) => {
  return (
    <div className="movie-item list-item--hoverable" onClick={onClick}>
      <ReactImageFallback
        src={`https://image.tmdb.org/t/p/w92${posterPath}`}
        fallbackImage="/images/default_poster.png"
        initialImage="/images/loader.gif"
        alt={`poster image for ${title}`}
        className="movie-item__poster movie-item__poster--small"
      />
      <div className="movie-item__info--small">
        <h3 className="movie-item__title">{title}</h3>
        <div className="movie-item__meta">
          <span>{formatReleaseYear(releaseDate)}</span>
          <span>{genres?.map((genre) => genre.name).join(", ")}</span>
          <span>{runtime} m</span>
          <span>{voteAverage}/10</span>
        </div>
      </div>
      {React.Children.toArray(buttons)}
    </div>
  );
};

export default MovieListItemCollapsed;
