import { MovieDb } from "moviedb-promise/dist";

const apiKey = process.env.THEMOVIEDB_API_KEY;
const movieDb = new MovieDb(apiKey);

export default movieDb;