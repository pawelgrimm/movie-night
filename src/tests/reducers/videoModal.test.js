import { expect } from "@jest/globals";
import videoModalReducer from "../../reducers/videoModal";
import { trailers } from "../fixtures/fixtures";

test("should open modal with videos", () => {
  const action = {
    type: "OPEN_MODAL",
    videos: trailers,
  };
  expect(videoModalReducer(undefined, action)).toEqual({
    isOpen: true,
    videos: trailers,
  });
});

test("should not open modal with no videos", () => {
  const action = {
    type: "OPEN_MODAL",
    videos: [],
  };
  expect(videoModalReducer(undefined, action)).toEqual({
    isOpen: false,
    videos: [],
  });
});

test("should close modal and clear out videos", () => {
  const action = {
    type: "CLOSE_MODAL",
  };
  const state = {
    isOpen: true,
    videos: trailers,
  };
  expect(videoModalReducer(state, action)).toEqual({
    isOpen: false,
    videos: [],
  });
});
