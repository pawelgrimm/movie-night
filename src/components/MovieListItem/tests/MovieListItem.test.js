import { expect } from "@jest/globals";
import { shallow } from "enzyme";
import React from "react";
import { MovieListItem } from "../MovieListItem";
import { movies } from "../../../global/tests/fixtures/fixtures";

test("should render MovieListItem correctly with movie", () => {
  const wrapper = shallow(
    <MovieListItem movie={movies[2]} removeMovie={() => {}} />
  );
  expect(wrapper).toMatchSnapshot();
});
