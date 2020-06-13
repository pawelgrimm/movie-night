import React, {useContext} from 'react';
import SearchResultItem from "./SearchResultItem";
import SearchContext from "../context/search-context";

const SearchResults = () => {
    const {searchResults} = useContext(SearchContext);
    return (
        <div className="search-results">
            {searchResults.map((result) => <SearchResultItem key={result.id} {...result}/>)}
        </div>
    )
}

export default SearchResults