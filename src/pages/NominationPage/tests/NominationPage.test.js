import { expect } from "@jest/globals";
import React from "react";
import { shallow } from "enzyme";
import { NominationPage } from "../NominationPage";
import { movies } from "../../../global/tests/fixtures/fixtures";

test("should render NominationPage with no movies", () => {
  const wrapper = shallow(
    <NominationPage appElement={undefined} clearMovieList={() => {}} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render NominationPage with movies", () => {
  const wrapper = shallow(
    <NominationPage
      appElement={undefined}
      clearMovieList={() => {}}
      movies={movies}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
