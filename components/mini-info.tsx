import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { Text } from "./ui/text";

export function MiniInfo() {
	return (
		<View className={`items-center gap-1 p-2`}>
			{/* icon */}
			<Ionicons name="flash" size={20} color="orange" />
			{/* text */}
			<Text className="text-md">42.0 kW</Text>
			{/* subtext */}
			<Text className="text-xs text-muted-foreground">Today</Text>
		</View>
	);
}
