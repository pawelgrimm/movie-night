import React, { useContext, useEffect, useReducer, useState } from "react";
import ReactImageFallback from "react-image-fallback";
import { addMovie, removeMovie } from "../actions/movie";
import MovieContext from "../context/movie-context";
import MovieImage from "./MovieImage";

const SearchResultItem = ({ movie, resetSearch }) => {
  const { movies: savedMovies, dispatch } = useContext(MovieContext);
  const [button, setButton] = useState("+");
  const [buttonClass, setButtonClass] = useState("");

  useEffect(() => {
    if (savedMovies.find((savedMovie) => savedMovie.id === movie.id)) {
      toggleButtonState();
    }
  }, []);

  const toggleButtonState = () => {
    setButton(button === "+" ? "-" : "+");
    setButtonClass(buttonClass ? "" : "button--secondary");
  };

  const onClick = () => {
    toggleButtonState();
    if (button === "+") {
      dispatch(addMovie(movie));
      resetSearch();
    } else {
      dispatch(removeMovie(movie.id));
    }
  };
  return (
    <div className="search-result-item">
      <MovieImage
        title={movie.title}
        imageWidth={68}
        filePath={movie.poster_path}
        type="poster"
        className="search-result-item__poster"
      />
      <div className="search-result-item__info">
        <h3>{movie.title}</h3>
        <span>{movie.release_date}</span>
        <p>{movie.overview}</p>
      </div>
      <div className="search-result-item__button">
        <button className={"button " + buttonClass} onClick={onClick}>
          {button}
        </button>
      </div>
    </div>
  );
};

export default SearchResultItem;
