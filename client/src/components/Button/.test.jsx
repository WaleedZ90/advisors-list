import React from "react";
import { shallow } from "enzyme";
import Button from "./index";

describe("<Button />", () => {
	it("renders without crashing", () => {
		shallow(<Button>Test</Button>);
	});

	it("fires onClick events", () => {
		const onClick = jest.fn();
		const button = shallow(<Button onClick={onClick}>Test</Button>);
		button.find(".button").simulate("click");
		expect(onClick).toBeCalled();
	});
});
