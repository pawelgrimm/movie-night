import { expect } from "@jest/globals";
import React from "react";
import { shallow } from "enzyme";
import DashboardPage from "../../components/DashboardPage";

test("should render ExpenseDashboardPage", () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
