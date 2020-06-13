import React from "react";
import ReactImageFallback from "react-image-fallback";

const MovieListItem = ({ movie }) => {
  const onClick = () => {
    console.log("this is when a movie should be removed");
  };
  return (
    <div className="list-item">
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
        <button className="button button--secondary" onClick={onClick}>
          -
        </button>
      </div>
    </div>
  );
};

export default MovieListItem;
