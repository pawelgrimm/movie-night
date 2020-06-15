import { expect } from "@jest/globals";
import movieReducer from "../../reducers/movie";
import { movies } from "../fixtures/fixtures";

test("should add movie", () => {
  const initialMovies = movies.slice(0, 2);
  const action = {
    type: "ADD_MOVIE",
    movie: movies[2],
  };
  const state = movieReducer(initialMovies, action);
  expect(state).toEqual([...initialMovies, movies[2]]);
});

test("should remove movie", () => {
  const initialMovies = movies.slice(0, 4);
  const indexToRemove = 2;
  const action = {
    type: "REMOVE_MOVIE",
    id: initialMovies[indexToRemove].id,
  };
  const state = movieReducer(initialMovies, action);
  expect(state).toEqual([
    ...initialMovies.slice(0, indexToRemove),
    ...initialMovies.slice(indexToRemove + 1, initialMovies.length),
  ]);
});

test("should update movie", () => {
  const initialMovies = movies.slice(0, 4);
  const indexToUpdate = 2;
  const newProperties = {};
  const action = {
    type: "EDIT_MOVIE",
    id: initialMovies[indexToUpdate].id,
  };
  const state = movieReducer(initialMovies, action);
  expect(state).toEqual([
    ...initialMovies.slice(0, indexToUpdate),
    ...initialMovies.slice(indexToUpdate + 1, initialMovies.length),
  ]);
});
