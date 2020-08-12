import React, { useEffect, useRef } from "react";
import MovieImage from "../../../components/MovieImage/MovieImage";
import { formatReleaseYear } from "../../../utils/theMovieDb";
import Loader from "../../../components/Loader/Loader";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";
import WatchTrailerButton from "./WatchTrailerButton";

const MovieListItemExpanded = ({
  id,
  movie,
  onClick,
  renderAdditionalItems,
  autoScroll = true,
}) => {
  if (!movie) {
    return <Loader />;
  }
  const {
    title,
    poster_path,
    release_date,
    genres,
    runtime,
    vote_average,
    tagline,
    overview,
    trailers,
  } = movie;

  const ref = useRef(null);

  useEffect(() => {
    if (autoScroll) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div
      className="movie-item--expanded movie-item--selected"
      onClick={onClick}
      ref={ref}
    >
      <div className="movie-item__image-section">
        <MovieImage
          title={title}
          type="poster"
          imageWidth={250}
          filePath={poster_path}
          className="movie-item__poster"
        />
        <div className="movie-item__image-section__text">
          <h2 className="movie-item__title">{title}</h2>
          <div className="movie-item__meta">
            <span>{formatReleaseYear(release_date)}</span>
            <span>{genres?.map((genre) => genre.name).join(", ")}</span>
            <span>{runtime} m</span>
            <span>{vote_average}/10</span>
          </div>
        </div>
      </div>
      <div className="movie-item__text-section">
        <div className="movie-item__info--large">
          <h2 className="movie-item__title">{title}</h2>
          <div className="movie-item__meta">
            <span>{formatReleaseYear(release_date)}</span>
            <span>{genres?.map((genre) => genre.name).join(", ")}</span>
            <span>{runtime} m</span>
            <span>{vote_average}/10</span>
          </div>
          <p className="movie-item__tagline">{tagline}</p>
          <h3 className="movie-item__overview-heading">Overview</h3>
          <p className="movie-item__overview">{overview}</p>
          <ButtonGroup>
            <WatchTrailerButton videos={trailers} />
            {renderAdditionalItems && renderAdditionalItems(id)}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default MovieListItemExpanded;
