import { useRouter } from "expo-router";
import { type GestureResponderEvent, Pressable, View } from "react-native";
import { SingleInfo } from "./single-info";
import { Badge } from "./ui/badge";
import { Text } from "./ui/text";

export default function SystemStatus({
	totalInverters,
	peakPower,
	currentPower,
}: {
	totalInverters: number;
	peakPower: number;
	currentPower: number;
}) {
	const router = useRouter();
	const onPress = (e?: GestureResponderEvent) => {
		if (e) {
			e.stopPropagation();
		}
		router.push("/modal");
	};
	return (
		<Pressable className="flex-1 p-0 items-center" onPress={onPress}>
			<Badge
				variant={"secondary"}
				className="w-fit h-8 flex-row"
				pointerEvents="box-none"
			>
				<View className="flex-row items-center gap-1 mr-1">
					<Text className="pl-1">
						{currentPower === 0 ? "Sleeping" : "Producing"}
					</Text>
					<View
						className={`w-2 h-2 ${currentPower === 0 ? "bg-blue-400" : "bg-green-400"} rounded-full`}
					/>
				</View>
				<Text className="text-green-600">
					{" "}
					{totalInverters} / {totalInverters}
				</Text>
			</Badge>
			<SingleInfo value={peakPower} unit="kWp" label="Peak Power" />
		</Pressable>
	);
}
