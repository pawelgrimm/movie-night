import { expect } from "@jest/global";
import { shallow } from "enzyme";
import React from "react";
import DashboardPage from "../DashboardPage";

test("should render Dashboard page", () => {
  const wrapper = shallow(<DashboardPage id="12345" />);
  expect(wrapper).toMatchSnapshot();
});
