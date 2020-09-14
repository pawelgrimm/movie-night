import React from "react";
import SearchResultItem from "./SearchResultItem/SearchResultItem";
import { useSearchContext } from "./search-context";
import styles from "./movie-search.module.scss";

export const SearchResults = () => {
  const { searchResults } = useSearchContext();

  if (searchResults.length === 0) {
    return null;
  }

  return (
    <div className={styles.dropdownContainer}>
      <div
        className={
          searchResults.length > 0 ? styles.dropdownActive : styles.dropdown
        }
      >
        <div className={styles.divider} />
        {searchResults.map((movie) => (
          <SearchResultItem key={movie.id} movie={movie} />
        ))}
        <div className={styles.shadowFix}></div>
      </div>
    </div>
  );
};

export default SearchResults;
