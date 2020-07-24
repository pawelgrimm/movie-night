import { expect } from "@jest/globals";
import { login, logout } from "./actions";

test("should setup login action object", () => {
  const uid = "1337id4me";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid,
  });
});

test("should setup logout action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT",
  });
});
