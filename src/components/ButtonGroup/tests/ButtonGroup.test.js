import { expect, jest } from "@jest/globals";
import React from "react";
import { shallow } from "enzyme";
import ButtonGroup from "../ButtonGroup";

test("should render button group", () => {
  const wrapper = shallow(
    <ButtonGroup>
      <button>Button Text</button>
      <button>Button Text</button>
    </ButtonGroup>
  );
  expect(wrapper).toMatchSnapshot();
});

test("should have correct class", () => {
  const wrapper = shallow(<ButtonGroup />);
  expect(wrapper.hasClass("button-group")).toBeTruthy();
});

test("should allow additional classes", () => {
  const wrapper = shallow(<ButtonGroup className="some-class" />);
  expect(wrapper.hasClass("button-group")).toBeTruthy();
  expect(wrapper.hasClass("some-class")).toBeTruthy();
});
