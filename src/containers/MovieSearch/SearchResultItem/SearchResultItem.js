import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MovieImage from "../../../components/MovieImage/MovieImage";
import { useSearchContext } from "../search-context";
import { addAndSaveMovie, removeMovie } from "../../../services/ballot/actions";
import { formatReleaseYear } from "../../../utils/theMovieDb";
import style from "./search-result-item.module.scss";
import Button from "../../../components/Button/Button";

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
  const [isSecondary, setIsSecondary] = useState(false);
  const { resetSearch } = useSearchContext();

  useEffect(() => {
    if (movies.find((id) => id === movie.id)) {
      toggleButtonState();
    }
  }, []);

  const toggleButtonState = () => {
    setButton(button === "+" ? "-" : "+");
    setIsSecondary((prev) => !prev);
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
    <div className={style.resultItem} tabIndex={0}>
      <MovieImage
        title={movie.title}
        imageWidth={68}
        filePath={movie.poster_path}
        type="poster"
        className={style.poster}
      />
      <div className={style.info}>
        <h3>{movie.title}</h3>
        <span>{formatReleaseYear(movie.release_date)}</span>
        <p>{movie.overview}</p>
      </div>
      <div className={style.buttons}>
        <Button type={isSecondary} className={style.button} onClick={onClick}>
          {button}
        </Button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultItem);
