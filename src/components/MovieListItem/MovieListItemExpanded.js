import React from "react";
import MovieImage from "../MovieImage/MovieImage";
import { formatReleaseYear } from "../../services/theMovieDb/theMovieDb";

const MovieListItemExpanded = ({ movie, onClick, buttons = [] }) => {
  return (
    <div onClick={onClick}>
      <div className="movie-item movie-item--selected">
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
            <span>{formatReleaseYear(movie.release_date)}</span>
            <span>{movie.genres?.map((genre) => genre.name).join(", ")}</span>
            <span>{movie.runtime} m</span>
            <span>{movie.vote_average}/10</span>
          </div>
          <p className="movie-item__tagline">{movie.tagline}</p>
          <h3 className="movie-item__overview-heading">Overview</h3>
          <p className="movie-item__overview">{movie.overview}</p>
          <div className="movie-item__button-group">
            {React.Children.toArray(buttons)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListItemExpanded;
