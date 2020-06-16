import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addMovie, removeMovie } from "../actions/movie";
import MovieImage from "./MovieImage";

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = (dispatch) => ({
  addMovie: (movie) => dispatch(addMovie(movie)),
  removeMovie: (id) => dispatch(removeMovie(id)),
});

export const SearchResultItem = ({
  movie,
  movies,
  addMovie,
  removeMovie,
  resetSearch,
}) => {
  const [button, setButton] = useState("+");
  const [buttonClass, setButtonClass] = useState("");

  useEffect(() => {
    if (movies.find((storedMovie) => storedMovie.id === movie.id)) {
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
      addMovie(movie);
      resetSearch();
    } else {
      removeMovie(movie.id);
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultItem);
