import React, { useContext } from "react";

const SearchContext = React.createContext([]);

// Workaround for https://github.com/enzymejs/enzyme/issues/2176#issuecomment-507830222
export const useSearchContext = () => useContext(SearchContext);

export default SearchContext;
