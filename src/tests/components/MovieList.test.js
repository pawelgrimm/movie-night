import { expect } from "@jest/globals";
import { shallow } from "enzyme";
import React from "react";
import { MovieList } from "../../components/MovieList";
import { movies } from "../fixtures/fixtures";

test("should render MovieList correctly with movies", () => {
  const wrapper = shallow(<MovieList movies={movies} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render MovieList correctly without movies", () => {
  const wrapper = shallow(<MovieList movies={[]} />);
  expect(wrapper).toMatchSnapshot();
});
