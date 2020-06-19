import React, { useState } from "react";
import { connect } from "react-redux";
import { removeMovie } from "../actions/movie";
import ReactImageFallback from "react-image-fallback";
import MovieImage from "./MovieImage";
import { getImageUrl } from "../theMovieDb/theMovieDb";

const mapDispatchToProps = (dispatch) => ({
  removeMovie: (id) => dispatch(removeMovie(id)),
});

export const MovieListItem = ({ movie, removeMovie, toggleModal }) => {
  const [selected, setSelected] = useState(false);

  const onTrailerButtonClick = () => {
    toggleModal();
  };

  const onRemoveButtonClick = () => {
    removeMovie(movie.id);
  };
  const onItemClick = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={
        "list-item " +
        (selected ? "list-item--background-image" : "list-item--hover-effect")
      }
      onClick={onItemClick}
      style={{
        backgroundImage:
          selected &&
          `url(${getImageUrl("backdrop", 500, movie.backdrop_path)})`,
      }}
    >
      {selected ? (
        <div className="movie-item">
          <MovieImage
            title={movie.title}
            type="poster"
            imageWidth={250}
            filePath={movie.poster_path}
            className="movie-item__poster"
          />
          <div className="movie-item__info">
            <h2 className="movie-item__title">{movie.title}</h2>
            <div className="movie-item__meta">
              {/*<span>{movie.rating}</span>*/}
              <span>{movie.release_date.split("-")[0]}</span>
              <span>{movie.genres.map((genre) => genre.name).join(", ")}</span>
              <span>{movie.runtime} m</span>
              <span>{movie.vote_average}/10</span>
            </div>
            <p className="movie-item__tagline">{movie.tagline}</p>
            <h3 className="movie-item__overview-heading">Overview</h3>
            <p className="movie-item__overview">{movie.overview}</p>
            <div className="movie-item__button-group">
              <button className="button" onClick={onTrailerButtonClick}>
                Watch Trailer
              </button>
              <button
                className="button button--secondary"
                onClick={onRemoveButtonClick}
              >
                Remove Movie
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="movie-item">
          <ReactImageFallback
            src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
            fallbackImage="/images/default_poster.png"
            initialImage="/images/loader.gif"
            alt={`poster image for ${movie.title}`}
            className="movie-item__poster movie-item__poster--small"
          />
          <div className="movie-item__info--small">
            <h3>{movie.title}</h3>
            <span>{movie.release_date.split("-")[0]}</span>
            <p>{movie.overview}</p>
          </div>
          <div className="search-result-item__button">
            <button
              className="button button--secondary"
              onClick={onRemoveButtonClick}
            >
              -
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(undefined, mapDispatchToProps)(MovieListItem);
