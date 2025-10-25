import { View } from "react-native";
import { SingleInfo } from "./single-info";
import { Badge } from "./ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Text } from "./ui/text";

export function InverterCard() {
	return (
		<Card className="w-[95%] h-fit rounded-xl">
			<CardHeader>
				<View className="flex-row gap-2">
					<CardTitle className="text-md">inv ID - 90ABCDEF12345678 </CardTitle>
					<Text className="bg-green-300 w-3 h-3 rounded-full"></Text>
				</View>
				<CardDescription>MicroInverter 1234</CardDescription>
			</CardHeader>
			<CardContent className="flex-row justify-between items-center">
				<View className="gap-2">
					<View className="flex-row gap-2">
						<Badge variant={"secondary"}>
							<Text className="text-xs">Model</Text>
						</Badge>
						<Text className="text-md">:</Text>
						<Badge variant={"outline"}>
							<Text className="text-xs">Bugatti</Text>
						</Badge>
					</View>
					<View className="flex-row gap-2">
						<Badge variant={"secondary"}>
							<Text className="text-xs">Serial</Text>
						</Badge>
						<Text className="text-md">:</Text>
						<Badge variant={"outline"}>
							<Text className="text-xs">blas-ms-04</Text>
						</Badge>
					</View>
					<View className="flex-row gap-2">
						<Badge variant={"secondary"}>
							<Text className="text-xs">Trackers</Text>
						</Badge>
						<Text className="text-md">:</Text>
						<Badge variant={"outline"}>
							<Text className="text-xs">2</Text>
						</Badge>
					</View>
				</View>
				<SingleInfo
					className="border-2 p-3 rounded-full border-[#FFA500]"
					value={34.5}
					unit="Watt"
					label="AC Power"
				/>
			</CardContent>
		</Card>
	);
}
