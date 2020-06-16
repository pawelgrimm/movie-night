import React, { useState, useContext, useReducer } from "react";
import movieDb from "../theMovieDb/theMovieDb";
import SearchContext from "../context/search-context";
import { setSearchResults } from "../actions/search";
import SearchResults from "./SearchResults";
import searchReducer from "../reducers/search";

const MovieSearch = ({ numResults }) => {
  const [query, setQuery] = useState("");
  const [searchResults, dispatch] = useReducer(searchReducer, []);

  const onChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery.length > 1) {
      movieDb
        .searchMovie(newQuery)
        .then((res) => {
          dispatch(setSearchResults(res.results, numResults));
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
    <SearchContext.Provider value={{ searchResults, dispatch }}>
      <div className="container--padding-y">
        <div className="container--flex">
          <input
            className="text-input text-input--grow"
            placeholder="Search for a movie"
            value={query}
            onChange={onChange}
          />
        </div>
        <SearchResults resetSearch={resetSearch} />
      </div>
    </SearchContext.Provider>
  );
};

export default MovieSearch;
