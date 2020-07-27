import { expect } from "@jest/globals";
import { shallow } from "enzyme";
import React from "react";
import { CreateBallotMovieList } from "../components/CreateBallotMovieList";
import { movies as testMovies } from "../../../global/tests/fixtures/fixtures";

test("noop test", () => {});

// test("should render NominationMovieList correctly with movies", () => {
//   const movies = {};
//   testMovies.forEach((movie) => {
//     movies[movie.id] = movie;
//   });
//   const wrapper = shallow(<NominationMovieList movies={movies} />);
//   expect(wrapper).toMatchSnapshot();
// });

// test("should render NominationMovieList correctly without movies", () => {
//   const wrapper = shallow(<NominationMovieList />);
//   expect(wrapper).toMatchSnapshot();
// });
