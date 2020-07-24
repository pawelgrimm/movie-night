import React from "react";
import SearchResultItem from "./SearchResultItem";
import { useSearchContext } from "./search-context";

export const SearchResults = () => {
  const { searchResults } = useSearchContext();
  return (
    <div className="search-results">
      <div className="dropdown">
        {searchResults.map((movie) => (
          <SearchResultItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
