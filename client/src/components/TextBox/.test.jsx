import React from "react";
import { shallow } from "enzyme";
import TextBox from "./index";

describe("<Textbox />", () => {
	it("renders without crashing", () => {
		shallow(<TextBox name="test" onChange={console.log} value="" />);
	});

	it("triggers onChange events", () => {
		const onTextChange = jest.fn();
		const textBox = shallow(
			<TextBox name="test" value="" onChange={onTextChange} />
		);
		textBox.find(".textbox").simulate("change", "Test");
		expect(onTextChange).toBeCalledWith("Test");
	});
});
