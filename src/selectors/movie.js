export const hydrateMovies = (movies = {}, ids = []) => {
  return ids.map((id) => {
    if (movies.hasOwnProperty(id) && movies[id].lastFetched) {
      return movies[id];
    }
    return { info: { id } };
  });
};
