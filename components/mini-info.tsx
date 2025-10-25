import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { Text } from "./ui/text";

export function MiniInfo(props: {
	value: string | number;
	unit: string;
	label: "current" | "today" | "updated";
}) {
	return (
		<View className={`items-center gap-1 p-2`}>
			{/* icon */}
			{props.label === "current" ? (
				<Ionicons name="flash" size={20} color="orange" />
			) : props.label === "today" ? (
				<FontAwesome5 name="sun" size={20} color="orange" />
			) : (
				<Feather name="clock" size={20} color="orange" />
			)}
			{/* text */}
			<Text className="text-md">
				{props.value} {props.unit}
			</Text>
			{/* subtext */}
			<Text className="text-xs text-muted-foreground">{props.label}</Text>
		</View>
	);
}
