import { expect } from "@jest/globals";
import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
  const uid = "1337id4me";
  const action = {
    type: "LOGIN",
    uid,
  };
  const state = authReducer(undefined, action);
  expect(state).toEqual({
    uid,
  });
});

test("should clear out uid for logout", () => {
  const initialState = {
    uid: "1337id4me",
  };
  const action = {
    type: "LOGOUT",
  };
  const state = authReducer(initialState, action);
  expect(state).toEqual({});
});
