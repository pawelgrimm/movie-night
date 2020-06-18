import { expect } from "@jest/globals";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  addMovie,
  removeMovie,
  setMovies,
  startUpdateMovieWithDetails,
  updateMovie,
} from "../../actions/movie";
import { movies } from "../fixtures/fixtures";
import { getMovieInfo, getMovieTrailers } from "../../theMovieDb/theMovieDb";

const creatMockStore = configureMockStore([thunk]);

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

test("should update movie with details and trailers from database", async (done) => {
  const store = creatMockStore();
  const id = movies[1].id;
  const info = await getMovieInfo(id);
  const trailers = await getMovieTrailers(id);
  store.dispatch(startUpdateMovieWithDetails(id)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "UPDATE_MOVIE",
      id,
      updates: {
        ...info,
        trailers,
      },
    });
    done();
  });
});

test("should create set movies action object", () => {
  expect(setMovies(movies)).toEqual({
    type: "SET_MOVIES",
    movies,
  });
});
