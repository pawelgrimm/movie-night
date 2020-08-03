import { expect } from "@jest/globals";
import movieReducer from "../reducer";
import { movies as testMovies } from "../../../global/tests/fixtures/fixtures";
import { SAVE_MOVIE } from "../actions";

test("should save movie", () => {
  const movies = {};
  testMovies.slice(0, 2).forEach((movie) => {
    movies[movie.id] = movie;
  });
  const action = {
    type: SAVE_MOVIE,
    id: testMovies[2].id,
    info: testMovies[2],
  };
  const state = movieReducer(movies, action);
  expect(state).toEqual({
    ...movies,
    [testMovies[2].id]: { info: testMovies[2] },
  });
});

test("should set movies", () => {
  const movies = {};
  testMovies.forEach((movie) => {
    movies[movie.id] = {
      info: movie,
      status: {
        isFetching: false,
        isError: false,
        lastFetched: 1596487276477,
      },
    };
  });

  const action = {
    type: "SET_MOVIES",
    movies,
  };
  const state = movieReducer(movies[2], action);
  expect(state).toEqual(movies);
});

// TODO:
// fetch movie request/success/failure actions
