import React, { useContext, useState } from "react";
import ReactImageFallback from "react-image-fallback";
import MovieContext from "../context/movie-context";
import { removeMovie } from "../actions/movie";
import { useDispatch } from "react-redux";

const MovieListItem = ({ movie }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  const onButtonClick = () => {
    dispatch(removeMovie(movie.id));
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

export default MovieListItem;
