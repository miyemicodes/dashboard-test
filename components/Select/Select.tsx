import React from "react";

interface SelectOption {
	value: any;
	label: string;
}

interface SelectProps {
	options: SelectOption[];
	label?: string;
	value?: any;
	id?: string;
	placeholder?: string;
	required?: boolean;
	onSelect?: ({ id, value }: { id: string; value: string }) => void;
	optionType?: "values" | "objects";
}

function Select({
	options = [
		{ value: "1", label: "One" },
		{ value: "2", label: "Two" },
	],
	onSelect = () => {},
	id = "",
	placeholder = "",
	value = "",
}: SelectProps) {
	return (
		
		<select
			value={value}
		 	onSelect={((e) => )}
			className=""
		>
			{placeholder && (
				<option
					value=""
					disabled
				>
					{placeholder}
				</option>
			)}
			{options.map((option) => (
				<option
					key={option.value}
					value={option.value}
					disabled
				>
					{option.label}
				</option>
			))}
		</select>
	);
}

export default Select;
