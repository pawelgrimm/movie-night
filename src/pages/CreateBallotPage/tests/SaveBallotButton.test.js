import { expect, jest } from "@jest/globals";
import { shallow } from "enzyme";
import React from "react";
import { SaveBallotButton } from "../components/SaveBallotButton";
import Loader from "../../../components/Loader/Loader";

test("should render button with text", () => {
  const wrapper = shallow(
    <SaveBallotButton onClick={() => {}}>Some Text</SaveBallotButton>
  );
  expect(wrapper).toMatchSnapshot();
});
test("should render button with loader", () => {
  const wrapper = shallow(
    <SaveBallotButton onClick={() => {}} isSaving={true}>
      Some Text
    </SaveBallotButton>
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.contains(<Loader />)).toBe(true);
});
