import { expect } from "@jest/globals";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { SAVE_MOVIE, saveMovie, SET_MOVIES, setMovies } from "../actions";
import { movies } from "../../../global/tests/fixtures/fixtures";
// import { getMovieInfo, getMovieTrailers } from "../../theMovieDb/theMovieDb";

// const creatMockStore = configureMockStore([thunk]);

test("should create save movie action object", () => {
  const movie = movies[1];
  const id = movie.id;
  const action = saveMovie(id, movie);
  expect(action).toEqual({
    type: SAVE_MOVIE,
    id,
    info: movie,
  });
});

// test("should update movie with details and trailers from database", async (done) => {
//   const store = creatMockStore();
//   const id = movies[1].id;
//   const info = await getMovieInfo(id);
//   const trailers = await getMovieTrailers(id);
//   store.dispatch(startUpdateMovieWithDetails(id)).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: "UPDATE_MOVIE",
//       id,
//       updates: {
//         ...info,
//         trailers,
//       },
//     });
//     done();
//   });
// });

test("should create set movies action object", () => {
  expect(setMovies(movies)).toEqual({
    type: SET_MOVIES,
    movies,
  });
});

// TODO: Test fetch movie sequence queries mocked db
// TODO: Test fetch when already fetching
// TODO: Test fetch failure
