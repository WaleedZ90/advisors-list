import React from "react";
import "./styles.scss";

import classNames from "classnames";

const Dropdown = ({
	id,
	name,
	items,
	onChange,
	value,
	disabled = false,
	className,
	placeholder
}) => {
	return (
		<select
			id={id}
			name={name}
			disabled={disabled}
			placeholder={placeholder}
			onChange={e => onChange(JSON.parse(e.target.value))}
			className={classNames("dropdown", "form-control", className)}
		>
			{items.map((item, index) => (
				<option
					key={index}
					selected={item.id === value.id}
					value={JSON.stringify(item)}
				>
					{item.label}
				</option>
			))}
		</select>
	);
};

export default Dropdown;
