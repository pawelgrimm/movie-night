import { expect } from "@jest/globals";
import React from "react";
import {
  openModal,
  closeModal,
  setAppElement,
  SET_APP_ELEMENT,
} from "../service/actions";
import Loader from "../../../components/Loader/Loader";

test("should create open modal action with no children", () => {
  expect(openModal()).toEqual({ type: "OPEN_MODAL", children: undefined });
});

test("should create open modal action with a Loader", () => {
  expect(openModal(<Loader />)).toEqual({
    type: "OPEN_MODAL",
    children: <Loader />,
  });
});

test("should create close modal action", () => {
  expect(closeModal()).toEqual({ type: "CLOSE_MODAL" });
});

test("should create set app element action", () => {
  const divElement = document.createElement("DIV");
  expect(setAppElement(divElement)).toEqual({
    type: SET_APP_ELEMENT,
    appElement: divElement,
  });
});
