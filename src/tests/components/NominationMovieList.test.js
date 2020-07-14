import { expect } from "@jest/globals";
import { shallow } from "enzyme";
import React from "react";
import { NominationMovieList } from "../../components/NominationMovieList";
import { movies } from "../fixtures/fixtures";

test("should render NominationMovieList correctly with movies", () => {
  const wrapper = shallow(<NominationMovieList movies={movies} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render NominationMovieList correctly without movies", () => {
  const wrapper = shallow(<NominationMovieList movies={[]} />);
  expect(wrapper).toMatchSnapshot();
});
