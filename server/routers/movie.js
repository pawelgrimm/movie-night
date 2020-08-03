import express from "express";
import { MovieDb } from "moviedb-promise";
const apiKey = process.env.THEMOVIEDB_API_KEY;

const movieDb = new MovieDb(apiKey);

const movieRouter = express.Router();

movieRouter.get("/api/movie/search/:query", async (req, res) => {
  const query = req.params.query;
  try {
    const results = await movieDb.searchMovie(query).then((res) => res.results);
    res.status(200).send(results);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

movieRouter.get("/api/movie/:id/info", async (req, res) => {
  const id = req.params.id;
  try {
    const info = await movieDb.movieInfo(id);
    res.status(200).send(info);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

movieRouter.get("/api/movie/:id/trailers", async (req, res) => {
  const id = req.params.id;
  try {
    const videos = await movieDb.movieVideos(id);
    if (!videos?.results) {
      res.status(404).send();
      return;
    }
    const trailers = videos.results.filter((video) => video.type === "Trailer");
    res.status(200).send(trailers);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

export default movieRouter;
