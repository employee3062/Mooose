import { View } from "react-native";
import { Badge } from "./ui/badge";
import { Text } from "./ui/text";

export default function SystemStatus() {
	return (
		<View className="flex-1 p-0 items-center">
			<Badge variant={"secondary"} className="w-fit h-6 flex-row">
				<View className="flex-row items-center gap-1 mr-1">
					<Text className="pl-1">Producing</Text>
					<View className="w-2 h-2 bg-green-400 rounded-full" />
				</View>
				<Text className="text-green-600">21 / 21</Text>
			</Badge>
			<View className="mt-3">
				<Text className="text-xl font-semibold">
					596.4 <Text className="text-sm">kWp</Text>
				</Text>
				<Text className="text-sm text-muted-foreground">Peak Power</Text>
			</View>
		</View>
	);
}
