import React from "react";
import SearchResultItem from "./SearchResultItem/SearchResultItem";
import { useSearchContext } from "./search-context";
import styles from "./movie-search.module.scss";

export const SearchResults = () => {
  const { searchResults } = useSearchContext();
  return (
    <div className="container--flex-col">
      <div className="search-results">
        <div className="dropdown">
          {searchResults.map((movie) => (
            <SearchResultItem key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
