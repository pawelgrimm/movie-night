import { expect } from "@jest/globals";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

import {
  ADD_MOVIE,
  addMovie,
  saveBallot,
  startCreateBallot,
} from "../../actions/ballot";
import { movies } from "../fixtures/fixtures";

const createMockStore = configureMockStore([thunk]);

test("should create add movie action object", () => {
  const id = "12354";

  expect(addMovie(id)).toEqual({
    type: ADD_MOVIE,
    id,
    movie: {},
  });
});

// test("should create create ballot action object", () => {
//   const id = "testing456**";
//   expect(createBallot(id)).toEqual({
//     type: "CREATE_BALLOT",
//     id,
//   });
// });
//
// test("should create start create ballot action object", (done) => {
//   const store = createMockStore();
//   const userId = "123542";
//   const movieIds = movies.map((movie) => movie.id);
//   store
//     .dispatch(startCreateBallot(movieIds, userId))
//     .then(() => {
//       const actions = store.getActions();
//       const ballotId = actions[0].id;
//       return database.ref(`ballots/${ballotId}`).once("value");
//     })
//     .then((snapshot) => {
//       expect(snapshot.val()).toEqual({
//         owner: userId,
//         movies: movieIds,
//       });
//       done();
//     })
//     .catch((err) => {
//       done.fail(err);
//     });
// });
