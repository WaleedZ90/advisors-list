import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

describe("<App />", () => {
	it("renders without crashing", () => {
		shallow(<App />);
	});
});
