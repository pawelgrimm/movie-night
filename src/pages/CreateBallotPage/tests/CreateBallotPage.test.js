import { expect } from "@jest/globals";
import React from "react";
import { shallow } from "enzyme";
import { CreateBallotPage } from "../CreateBallotPage";
import { movies } from "../../../global/tests/fixtures/fixtures";

test("should render NominationPage with no movies", () => {
  const wrapper = shallow(
    <CreateBallotPage appElement={undefined} clearMovieList={() => {}} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render NominationPage with movies", () => {
  const wrapper = shallow(
    <CreateBallotPage
      appElement={undefined}
      clearMovieList={() => {}}
      movies={movies}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
