import React, {useReducer} from "react";
import MovieSearch from "./MovieSearch";
import searchReducer from "../reducers/search";
import SearchContext from "../context/search-context";

const DashboardPage = () => {
    const [ searchResults, dispatch ] = useReducer(searchReducer, []);
    const setBackground = (imageUrl) => {

    }
    return (
        <SearchContext.Provider value={{searchResults, dispatch}}>
            <div className="content-container">
                <MovieSearch />
            </div>
        </SearchContext.Provider>
    );
}

export default DashboardPage;
