import { expect, jest } from "@jest/globals";
import { shallow } from "enzyme";
import React from "react";
import SaveBallotButton from "../components/SaveBallotButton";
import Loader from "../../../components/Loader/Loader";

jest.mock("react-redux", () => ({
  useSelector: () => false,
  useDispatch: () => {},
}));

test("should render button with text", () => {
  const wrapper = shallow(<SaveBallotButton>Some Text</SaveBallotButton>);
  expect(wrapper).toMatchSnapshot();
});

// TODO: Figure out how to modify mock such that the selector returns true
// test("should render button with loader", () => {
//   const wrapper = shallow(<SaveBallotButton>Some Text</SaveBallotButton>);
//   expect(wrapper).toMatchSnapshot();
//   expect(wrapper.contains(<Loader />)).toBe(true);
// });
