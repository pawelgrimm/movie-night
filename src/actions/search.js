export const setSearchResults = (results = [], numResults = 20) => {
  return {
    type: "SET_RESULTS",
    results: results.slice(0, numResults),
  };
};
