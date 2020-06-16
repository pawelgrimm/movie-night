import { expect } from "@jest/globals";
import {
  addMovie,
  removeMovie,
  setMovies,
  updateMovie,
} from "../../actions/movie";
import { movies } from "../fixtures/fixtures";

test("should create add movie action object", () => {
  const movie = movies[1];
  const action = addMovie(movie);
  expect(action).toEqual({
    type: "ADD_MOVIE",
    movie,
  });
});

test("should create remove movie action object", () => {
  const id = movies[3].id;
  const action = removeMovie(id);
  expect(action).toEqual({
    type: "REMOVE_MOVIE",
    id,
  });
});

test("should create update movie action object", () => {
  const id = movies[0].id;
  const updates = {
    title: "new title",
    tagline: "the movie's tagline",
    runtime: 67,
  };
  const action = updateMovie(id, updates);
  expect(action).toEqual({
    type: "UPDATE_MOVIE",
    id,
    updates,
  });
});

test("should create set movies action object", () => {
  expect(setMovies(movies)).toEqual({
    type: "SET_MOVIES",
    movies,
  });
});
