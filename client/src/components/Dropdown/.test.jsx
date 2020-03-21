import React from "react";
import { shallow, mount } from "enzyme";
import Dropdown from "./index";

describe("<Dropdown />", () => {
	it("renders without crashing", () => {
		const items = [
			{ id: 1, label: "First user" },
			{ id: 2, label: "Second User" }
		];
		shallow(
			<Dropdown
				value={items[0]}
				name="test"
				onChange={selectedItem => console.log(selectedItem)}
				items={items}
			/>
		);
	});

	it("triggers onChange events", () => {
		const items = [
			{ id: 1, label: "First user" },
			{ id: 2, label: "Second User" }
		];
		const onSelectChange = jest.fn();
		const dropdown = mount(
			<Dropdown
				name="test"
				value={items[0]}
				onChange={onSelectChange}
				items={items}
			/>
		);
		dropdown.find(".dropdown").simulate("change");
		expect(onSelectChange).toBeCalled();
	});

	it("emits name and value on item select", () => {
		const items = [
			{ id: 1, label: "First user" },
			{ id: 2, label: "Second User" }
		];

		const onSelectChange = jest.fn();
		const dropdown = mount(
			<Dropdown
				value={items[0]}
				name="testDropdown"
				onChange={onSelectChange}
				items={items}
			/>
		);
		dropdown
			.find(".dropdown")
			.simulate("change", { label: "First user", id: 1 });
		expect(onSelectChange).toBeCalledWith({ id: 1, label: "First user" });
	});
});
