import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MovieImage from "../../components/MovieImage/MovieImage";
import { useSearchContext } from "./search-context";
import { addAndSaveMovie, removeMovie } from "../../services/ballot/actions";
import { formatReleaseYear } from "../../services/theMovieDb/theMovieDb";

const mapStateToProps = ({ ballot }) => ({
  movies: ballot.movies,
});

const mapDispatchToProps = (dispatch) => ({
  addMovie: (movie) => {
    dispatch(addAndSaveMovie(movie.id, movie));
  },
  removeMovie: (id) => dispatch(removeMovie(id)),
});

export const SearchResultItem = ({ movie, movies, addMovie, removeMovie }) => {
  const [button, setButton] = useState("+");
  const [buttonClass, setButtonClass] = useState("");
  const { resetSearch } = useSearchContext();

  useEffect(() => {
    if (movies.find((id) => id === movie.id)) {
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
    } else {
      removeMovie(movie.id);
    }
    resetSearch();
  };
  return (
    <div className="search-result-item" tabIndex={0}>
      <MovieImage
        title={movie.title}
        imageWidth={68}
        filePath={movie.poster_path}
        type="poster"
        className="search-result-item__poster"
      />
      <div className="search-result-item__info">
        <h3>{movie.title}</h3>
        <span>{formatReleaseYear(movie.release_date)}</span>
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
