import React from "react";
import ReactImageFallback from "react-image-fallback";
import { formatReleaseYear } from "../../../utils/theMovieDb";
import Loader from "../../../components/Loader/Loader";

const MovieListItemCollapsed = ({
  id,
  movie,
  onClick,
  renderAdditionalItems,
}) => {
  if (!movie) {
    return <Loader />;
  }
  const {
    poster_path,
    title,
    release_date,
    genres,
    runtime,
    vote_average,
  } = movie;

  return (
    <div className="movie-item list-item--hoverable" onClick={onClick}>
      <ReactImageFallback
        src={`https://image.tmdb.org/t/p/w92${poster_path}`}
        fallbackImage="/images/default_poster.png"
        initialImage="/images/loader.gif"
        alt={`poster image for ${title}`}
        className="movie-item__poster movie-item__poster--small"
      />
      <div className="movie-item__info--small">
        <h3 className="movie-item__title">{title}</h3>
        <div className="movie-item__meta">
          <span>{formatReleaseYear(release_date)}</span>
          <span>{genres?.map((genre) => genre.name).join(", ")}</span>
          <span className="movie-item__meta__runtime">
            {runtime ? runtime + " m" : ""}
          </span>
          <span>{vote_average ? vote_average + "/10" : ""}</span>
        </div>
      </div>
      {renderAdditionalItems(id)}
    </div>
  );
};

export default MovieListItemCollapsed;
