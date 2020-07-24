import { expect } from "@jest/globals";
import { setSearchResults } from "../service/actions";

test("should create set search results action", () => {
  const results = [{ title: "movie one" }, { title: "movie two" }];
  const action = setSearchResults(results);
  expect(action).toEqual({
    type: "SET_RESULTS",
    results,
  });
});
