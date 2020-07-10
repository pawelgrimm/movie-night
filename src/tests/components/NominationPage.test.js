import { expect } from "@jest/globals";
import React from "react";
import { shallow } from "enzyme";
import NominationPage from "../../components/NominationPage";

test("should render DashboardPage", () => {
  const wrapper = shallow(<NominationPage />);
  expect(wrapper).toMatchSnapshot();
});
