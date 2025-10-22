import { View } from "react-native";
import { Text } from "./ui/text";

export function SingleInfo({
	value,
	unit,
	label,
	className,
}: {
	value: number;
	unit: string;
	label: string;
	className?: string;
}) {
	return (
		<View className={`mt-2 items-center ${className}`}>
			<Text className="text-xl font-semibold">
				{value} <Text className="text-sm">{unit}</Text>
			</Text>
			<Text className="text-sm text-muted-foreground">{label}</Text>
		</View>
	);
}
