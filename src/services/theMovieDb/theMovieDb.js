import { MovieDb } from "moviedb-promise/dist";
const apiKey = process.env.THEMOVIEDB_API_KEY;

const movieDb = new MovieDb(apiKey);

export const search = (query) => {
  return movieDb.searchMovie(query).then((res) => res.results);
};

export const getMovieInfo = (id) => {
  return movieDb.movieInfo(id);
};

const availableSizes = {
  backdrop_sizes: [300, 780, 1280],
  poster_sizes: [92, 154, 185, 342, 500, 780],
};

export const getImageUrl = (type, image_width, file_path) => {
  let file_size;
  const typeKey = type + "_sizes";
  if (availableSizes.hasOwnProperty(typeKey)) {
    file_size = availableSizes[typeKey].find((size) => size >= image_width);
  }
  file_size = file_size ? "w" + file_size : "original";

  return `https://image.tmdb.org/t/p/${file_size}${file_path}`;
};

export const getMovieTrailers = (id) => {
  return movieDb
    .movieVideos(id)
    .then((res) => res.results.filter((video) => video.type === "Trailer"));
};

export const formatReleaseYear = (releaseDate) => {
  return releaseDate?.split("-")[0] || "";
};

export default movieDb;
