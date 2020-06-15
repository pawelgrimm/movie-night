import { expect } from "@jest/globals";
import { addMovie, removeMovie } from "../../actions/movie";
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
