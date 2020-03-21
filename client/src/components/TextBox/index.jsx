import React from "react";
import "./styles.scss";

import classNames from "classnames";

const TextBox = ({
	id,
	name,
	type = "text",
	onChange,
	onBlur,
	value,
	disabled = false,
	className,
	autoComplete = "off",
	placeholder
}) => {
	return (
		<input
			name={name}
			id={`${id}__input`}
			type={type}
			onChange={onChange}
			onBlur={onBlur}
			value={value}
			disabled={disabled}
			className={classNames("textbox", "form-control", className)}
			autoComplete={autoComplete}
			placeholder={placeholder}
		/>
	);
};

export default TextBox;
