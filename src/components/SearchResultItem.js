import React, { useContext, useReducer, useState } from "react";
import ReactImageFallback from "react-image-fallback";
import { addMovie } from "../actions/movie";
import MovieContext from "../context/movie-context";

const SearchResultItem = ({ movie, resetSearch }) => {
  const { dispatch } = useContext(MovieContext);
  const [button, setButton] = useState("+");
  const [buttonClass, setButtonClass] = useState("");

  const onClick = (e) => {
    if (button === "+") {
      console.log("added movie:", movie);
      dispatch(addMovie(movie));
      setButton("-");
      setButtonClass("button--secondary");
      resetSearch();
    } else {
      setButton("+");
      setButtonClass("");
    }
  };
  return (
    <div className="search-result-item">
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
        <button className={"button " + buttonClass} onClick={onClick}>
          {button}
        </button>
      </div>
    </div>
  );
};

export default SearchResultItem;
