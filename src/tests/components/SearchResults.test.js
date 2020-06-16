import { jest, expect } from "@jest/globals";
import { shallow } from "enzyme";
import React from "react";
import SearchResults from "../../components/SearchResults";
import { movies } from "../fixtures/fixtures";

// Workaround 1 - https://github.com/enzymejs/enzyme/issues/2176#issuecomment-507830222
import * as SearchContextModule from "../../context/search-context";
import SearchContext from "../../context/search-context";

test("Should render SearchResults with results", () => {
  // Start workaround 1 setup
  jest
    .spyOn(SearchContextModule, "useSearchContext")
    .mockImplementation(() => ({
      searchResults: movies,
      resetSearch: () => {},
    }));
  // End workaround 1 setup

  const wrapper = shallow(
    <SearchContext.Provider>
      <SearchResults />
    </SearchContext.Provider>
  ).dive();
  expect(wrapper).toMatchSnapshot();
});
