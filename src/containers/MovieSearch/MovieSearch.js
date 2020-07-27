import React, { useState, useReducer, useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import SearchContext from "./search-context";
import { setSearchResults } from "./service/actions";
import searchReducer from "./service/reducer";
import SearchResults from "./SearchResults";

const MovieSearch = ({ numResults }) => {
  const [query, setQuery] = useState("");
  const [searchResults, dispatch] = useReducer(searchReducer, []);

  const searchInput = useRef(null);
  // const handleFocus = () => {
  //   searchInput.current.focus();
  // };

  const onChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery.length > 1) {
      search(newQuery)
        .then((movies) => {
          dispatch(setSearchResults(movies, numResults));
        })
        .catch((error) => console.log(error));
    } else {
      dispatch(setSearchResults());
    }
  };

  const resetSearch = () => {
    setQuery("");
    dispatch(setSearchResults());
    //handleFocus();
  };

  return (
    <SearchContext.Provider value={{ searchResults, dispatch, resetSearch }}>
      <OutsideClickHandler onOutsideClick={resetSearch}>
        <div className="container--flex-col">
          <input
            className="card text-input text-input--grow"
            //autoFocus
            placeholder="Search for a movie"
            value={query}
            onChange={onChange}
            ref={searchInput}
          />
        </div>
        <SearchResults />
      </OutsideClickHandler>
    </SearchContext.Provider>
  );
};

import { search } from "../../services/theMovieDb/theMovieDb";

export default MovieSearch;
