import { expect } from "@jest/globals";
import { shallow } from "enzyme";
import React from "react";

test("", () => {
  const wrapper = shallow(<div />);
  expect(wrapper).toMatchSnapshot();
});
