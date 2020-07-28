import { expect } from "@jest/globals";
import React from "react";
import modalReducer from "../service/reducer";
import { CLOSE_MODAL, OPEN_MODAL, SET_APP_ELEMENT } from "../service/actions";
import Loader from "../../../components/Loader/Loader";

test("should open modal with videos", () => {
  const action = {
    type: OPEN_MODAL,
    children: <Loader />,
  };
  expect(modalReducer(undefined, action)).toEqual({
    isOpen: true,
    children: <Loader />,
  });
});

test("should not open modal with no children", () => {
  const action = {
    type: OPEN_MODAL,
  };
  expect(modalReducer(undefined, action)).toEqual({
    isOpen: false,
    children: undefined,
  });
});

test("should close modal and clear out children", () => {
  const action = {
    type: CLOSE_MODAL,
  };
  const state = {
    isOpen: true,
    children: <Loader />,
  };
  expect(modalReducer(state, action)).toEqual({
    isOpen: false,
    children: undefined,
  });
});

test("should update app element", () => {
  const state = {
    isOpen: true,
    children: <Loader />,
    appElement: document.createElement("SPAN"),
  };
  const divElement = document.createElement("DIV");
  const action = {
    type: SET_APP_ELEMENT,
    appElement: divElement,
  };
  expect(modalReducer(state, action)).toEqual({
    ...state,
    appElement: divElement,
  });
});

test("close modal action should not clear out app element", () => {
  const state = {
    isOpen: true,
    children: <Loader />,
    appElement: document.createElement("DIV"),
  };
  const action = { type: CLOSE_MODAL };
  expect(modalReducer(state, action)).toEqual({
    isOpen: false,
    children: undefined,
    appElement: state.appElement,
  });
});

test("open modal action should not clear out app element", () => {
  const state = {
    isOpen: false,
    children: undefined,
    appElement: document.createElement("DIV"),
  };
  const action = {
    type: OPEN_MODAL,
    children: React.createElement(Loader),
  };
  expect(modalReducer(state, action)).toEqual({
    isOpen: true,
    children: action.children,
    appElement: state.appElement,
  });
});
