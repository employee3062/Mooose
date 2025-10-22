import { useState } from "react";
import { Input } from "@/components/ui/input";

export function NumberInput(props: { min: number; max: number }) {
	const [value, setValue] = useState("1");

	const handleChange = (text: string) => {
		// Allow only numbers
		if (/^\d*$/.test(text)) {
			if (
				text === "" ||
				(parseInt(text, 10) >= props.min && parseInt(text, 10) <= props.max)
			) {
				setValue(text);
			}
		}
	};
	return (
		<Input
			className="w-12"
			keyboardType="numeric"
			value={value}
			placeholder="01"
			onChangeText={handleChange}
		/>
	);
}
