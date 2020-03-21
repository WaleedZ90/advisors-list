import React from "react";
import "./styles.scss";
import classNames from "classnames";

const Button = ({
	id,
	type = "button",
	onClick,
	className,
	disabled,
	children
}) => {
	return (
		<button
			id={id}
			type={type}
			onClick={onClick}
			className={classNames("button", "form-control", className)}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
