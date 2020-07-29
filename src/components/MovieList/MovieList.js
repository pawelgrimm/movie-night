import React from "react";
import MovieListItem from "../../containers/MovieListItem/MovieListItem";

const MovieList = ({
  movieIds = [],
  renderExpandedItems,
  renderCollapsedItems,
}) => {
  if (movieIds.length === 0) {
    return null;
  }
  return (
    <ul className="card movie-list">
      {movieIds.map((id) => (
        <MovieListItem
          key={id}
          id={id}
          renderExpandedItems={renderExpandedItems}
          renderCollapsedItems={renderCollapsedItems}
        />
      ))}
    </ul>
  );
};

export default MovieList;
