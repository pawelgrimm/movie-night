import { expect } from "@jest/globals";
import { shallow } from "enzyme";
import React from "react";
import { SearchResultItem } from "../SearchResultItem";
import { movies } from "../../../global/tests/fixtures/fixtures";

test("should render search result item correctly", () => {
  const movie = movies[2];
  const wrapper = shallow(
    <SearchResultItem
      movies={[]}
      addMovie={() => {}}
      removeMovie={() => {}}
      movie={movie}
      resetSearch={() => {}}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
