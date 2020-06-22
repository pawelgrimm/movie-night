import React from "react";
import { connect } from "react-redux";
import MovieListItem from "./MovieListItem";

const mapStateToProps = ({ movies }) => ({ movies });

export const MovieList = ({ movies, toggleModal }) => {
  return (
    <div className="list-body">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieListItem
            key={movie.id}
            movie={movie}
            toggleModal={toggleModal}
          />
        ))
      ) : (
        <div>
          <h3>Welcome to Movie Night!</h3>
          <p>Use the search to add some movies to your list.</p>
          <p>
            Once you're done, send the list to your friends. They will be able
            to vote on the movies you selected!
          </p>
          <p>
            When all the votes are in, the most favorable movie will be selected
            for your movie night!
          </p>
          <p>Enjoy!</p>
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(MovieList);
