import React, { useState, useReducer } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import SearchContext from "../context/search-context";
import { setSearchResults } from "../actions/search";
import searchReducer from "../reducers/search";
import SearchResults from "./SearchResults";
const MovieSearch = ({ numResults }) => {
  const [query, setQuery] = useState("");
  const [searchResults, dispatch] = useReducer(searchReducer, []);

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
  };

  return (
    <SearchContext.Provider value={{ searchResults, dispatch, resetSearch }}>
      <OutsideClickHandler onOutsideClick={resetSearch}>
        <div className="container--padding-y">
          <div className="container--flex">
            <input
              className="text-input text-input--grow"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>
          <SearchResults />
        </div>
      </OutsideClickHandler>
    </SearchContext.Provider>
  );
};

import { search } from "../theMovieDb/theMovieDb";

export default MovieSearch;
