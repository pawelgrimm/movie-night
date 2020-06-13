import React, { useContext, useReducer } from "react";
import SearchResultItem from "./SearchResultItem";
import SearchContext from "../context/search-context";
import movieReducer from "../reducers/movie";

const SearchResults = ({ resetSearch }) => {
  const { searchResults } = useContext(SearchContext);
  return (
    <div className="search-results">
      <div className="dropdown">
        {searchResults.map((movie) => (
          <SearchResultItem
            key={movie.id}
            movie={movie}
            resetSearch={resetSearch}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
