import { expect } from "@jest/globals";
import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../NotFoundPage";

test("should render NotFoundPage", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
