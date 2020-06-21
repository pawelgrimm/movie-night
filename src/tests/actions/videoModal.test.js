import { expect } from "@jest/globals";
import { openModal, closeModal } from "../../actions/videoModal";
import { trailers } from "../fixtures/fixtures";

test("should create open modal action with empty videos array", () => {
  expect(openModal()).toEqual({ type: "OPEN_MODAL", videos: [] });
});

test("should create open modal action with empty videos array", () => {
  expect(openModal(trailers)).toEqual({ type: "OPEN_MODAL", videos: trailers });
});

test("should create close modal action", () => {
  expect(closeModal()).toEqual({ type: "CLOSE_MODAL" });
});