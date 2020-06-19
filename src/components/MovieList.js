import React from "react";
import { connect } from "react-redux";
import MovieListItem from "./MovieListItem";

const mapStateToProps = ({ movies }) => ({ movies });

export const MovieList = ({ movies, toggleModal }) => {
  return (
    movies.length > 0 && (
      <div className="list-body">
        {movies.map((movie) => (
          <MovieListItem
            key={movie.id}
            movie={movie}
            toggleModal={toggleModal}
          />
        ))}
      </div>
    )
  );
};

export default connect(mapStateToProps)(MovieList);
