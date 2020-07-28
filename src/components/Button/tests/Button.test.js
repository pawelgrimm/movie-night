import { expect, jest } from "@jest/globals";
import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

test("should render buttons", () => {
  const button = shallow(<Button>Button Text</Button>);
  expect(button).toMatchSnapshot();
  const secondaryButton = shallow(
    <Button type="secondary">Button Text</Button>
  );
  expect(secondaryButton).toMatchSnapshot();
});

test("should have correct class", () => {
  const button = shallow(<Button>Button Text</Button>);
  expect(button.hasClass("button")).toBeTruthy();
});

test("secondary button should have correct classes", () => {
  const button = shallow(<Button type="secondary">Button Text</Button>);
  expect(button.hasClass("button")).toBeTruthy();
  expect(button.hasClass("button--secondary")).toBeTruthy();
});

test("should render children", () => {
  const button = shallow(
    <Button>
      <div id="inner">Some text</div>
    </Button>
  );
  expect(button.find("#inner").type()).toEqual("div");
});

test("should pass through provided classes", () => {
  const testingClasses = ["testing", "additional"];
  const wrapper = shallow(<Button className={testingClasses.join(" ")} />);
  const classes = wrapper.prop("className").split(" ");
  testingClasses.push("button");
  expect(classes).toHaveLength(testingClasses.length);
  expect(classes).toEqual(expect.arrayContaining(testingClasses));
});

test("should pass through other props", () => {
  const wrapper = shallow(<Button someProp={true} />);
  expect(
    wrapper.prop("someProp"),
    `Expected to have "someProp" prop, but only had: ${Object.keys(
      wrapper.props()
    )}`
  ).toBe(true);
});
