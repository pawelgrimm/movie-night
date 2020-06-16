import React, { useState } from "react";
import { connect } from "react-redux";
import { removeMovie } from "../actions/movie";
import ReactImageFallback from "react-image-fallback";

const mapDispatchToProps = (dispatch) => ({
  removeMovie: (id) => dispatch(removeMovie(id)),
});

export const MovieListItem = ({ movie, removeMovie }) => {
  const [selected, setSelected] = useState(false);

  const onButtonClick = () => {
    removeMovie(movie.id);
  };
  const onItemClick = () => {
    setSelected(!selected);
  };

  return (
    <div
      className="list-item"
      onClick={onItemClick}
      style={{
        background:
          selected &&
          `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
      }}
    >
      {selected ? (
        <>
          <ReactImageFallback
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            fallbackImage="/images/default_poster.png"
            initialImage="/images/loader.gif"
            alt={`poster image for ${movie.title}`}
            className="search-result-item__poster"
          />
          <div className="search-result-item__info">
            <h3>{movie.title}</h3>
            <span>{movie.release_date}</span>
            <p>{movie.overview}</p>
            <p>{movie.t}</p>
          </div>
          <div className="search-result-item__button">
            <button
              className="button button--secondary"
              onClick={onButtonClick}
            >
              -
            </button>
          </div>
        </>
      ) : (
        <>
          <ReactImageFallback
            src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
            fallbackImage="/images/default_poster.png"
            initialImage="/images/loader.gif"
            alt={`poster image for ${movie.title}`}
            className="search-result-item__poster"
          />
          <div className="search-result-item__info">
            <h3>{movie.title}</h3>
            <span>{movie.release_date}</span>
            <p>{movie.overview}</p>
          </div>
          <div className="search-result-item__button">
            <button
              className="button button--secondary"
              onClick={onButtonClick}
            >
              -
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default connect(undefined, mapDispatchToProps)(MovieListItem);
