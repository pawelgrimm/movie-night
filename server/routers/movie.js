import express from "express";
import { MovieDb } from "moviedb-promise/dist";
const apiKey = process.env.THEMOVIEDB_API_KEY;

const movieDb = new MovieDb(apiKey);

const movieRouter = express.Router();

movieRouter.get("/api/movie/search/:query", async (req, res) => {
  const query = req.params.query;
  try {
    const results = await movieDb.searchMovie(query);
    res.status(200).send(results);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

export default movieRouter;
