import { expect } from "@jest/globals";
import movieReducer from "../../reducers/movie";
import { movies as testMovies } from "../fixtures/fixtures";

test("should add movie", () => {
  const initialMovies = testMovies.slice(0, 2);
  const action = {
    type: "ADD_MOVIE",
    movie: testMovies[2],
  };
  const state = movieReducer(initialMovies, action);
  expect(state).toEqual([...initialMovies, testMovies[2]]);
});

test("should remove movie", () => {
  const movies = testMovies.slice(0, 4);
  const indexToRemove = 2;
  const action = {
    type: "REMOVE_MOVIE",
    id: movies[indexToRemove].id,
  };
  const state = movieReducer(movies, action);
  expect(state).toEqual([
    ...movies.slice(0, indexToRemove),
    ...movies.slice(indexToRemove + 1, movies.length),
  ]);
});

test("should update movie", () => {
  const movies = testMovies.slice(0, 2);
  const updates = {
    title: "new title",
    tagline: "the movie's tagline",
    runtime: 67,
  };
  const action = {
    type: "UPDATE_MOVIE",
    id: movies[1].id,
    updates,
  };
  const state = movieReducer(movies, action);
  expect(state).toEqual([movies[0], { ...movies[1], ...updates }]);
});

test("should not update nonexistent movie", () => {
  const movies = testMovies;
  const updates = {
    title: "new title",
    tagline: "the movie's tagline",
    runtime: 67,
  };
  const action = {
    type: "UPDATE_MOVIE",
    id: "madeUpId",
    updates,
  };
  const state = movieReducer(movies, action);
  expect(state).toEqual(movies);
});

test("should set movies", () => {
  const movies = testMovies;
  const action = {
    type: "SET_MOVIES",
    movies,
  };
  const state = movieReducer(movies[2], action);
  expect(state).toEqual(movies);
});
