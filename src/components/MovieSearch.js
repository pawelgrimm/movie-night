import React, { useState, useContext } from 'react';
import movieDb from "../themoviedb/themoviedb";
import SearchContext from "../context/search-context";
import {setSearchResults} from "../actions/search";
import SearchResults from "./SearchResults";

const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const {dispatch} = useContext(SearchContext);

    const onChange = (e) => {
        const newQuery = e.target.value
        setQuery(newQuery)
        if (newQuery.length > 3) {
            movieDb
                .searchMovie(newQuery)
                .then((res) => {
                    dispatch(setSearchResults(res.results));
                })
                .catch((error) => console.log(error));
        }
    }

    return (
        <div className="container--padding-y">
            <div className="container--flex">
                <input
                    className="text-input text-input--grow"
                    placeholder="Search for a movie"
                    onChange={onChange}
                />
            </div>
            <SearchResults />
        </div>


    );
}

export default MovieSearch