import React, { useState, useReducer, useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import SearchContext from "./search-context";
import { setSearchResults } from "./service/actions";
import searchReducer from "./service/reducer";
import SearchResults from "./SearchResults";
import TextInput from "../../components/TextInput/TextInput";
import { getMovieSearch } from "../../services/server/api";
import styles from "./movie-search.module.scss";

const MovieSearch = ({ numResults }) => {
  const [query, setQuery] = useState("");
  const [searchResults, dispatch] = useReducer(searchReducer, []);
  const containerDiv = useRef(null);
  const searchInput = useRef(null);

  const onChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery.length > 1) {
      getMovieSearch(newQuery)
        .then((movies) => {
          dispatch(setSearchResults(movies, numResults));
        })
        .catch((error) => console.log(error));
    } else {
      dispatch(setSearchResults());
    }
    onClick(e);
  };

  const resetSearch = () => {
    setQuery("");
    dispatch(setSearchResults());
    //handleFocus();
  };

  const onClick = () => {
    containerDiv.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <SearchContext.Provider value={{ searchResults, dispatch, resetSearch }}>
      <OutsideClickHandler onOutsideClick={resetSearch}>
        <TextInput
          placeholder="Search for a movie"
          className={styles.searchInput}
          value={query}
          onChange={onChange}
          containerRef={containerDiv}
          searchRef={searchInput}
          onClick={onClick}
        />
        <SearchResults />
      </OutsideClickHandler>
    </SearchContext.Provider>
  );
};

export default MovieSearch;
