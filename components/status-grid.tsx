import { ScrollView, View } from "react-native";
import { Badge } from "./ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { TabsContent } from "./ui/tabs";
import { Text } from "./ui/text";

const headerText = {
	red: "Error Inverters",
	green: "Online Inverters",
	moon: "Sleeping Inverters",
};

const descriptionText = {
	red: "When the system detects an issue, and stops producing power during the day.",
	green: "When the system is operating normally and producing power.",
	moon: "When the system is not producing power due to absence of sunlight.",
};

export function StatusGrid({
	status,
	inverterCount,
	inverters,
}: {
	status: "red" | "green" | "moon";
	inverterCount: number;
	inverters: string[];
}) {
	const status_color =
		status === "red"
			? "bg-red-400"
			: status === "green"
				? "bg-green-400"
				: "bg-blue-400";
	return (
		<TabsContent value={status}>
			<Card>
				<CardHeader>
					<View className="flex-row gap-2">
						<CardTitle>{headerText[status]}</CardTitle>
						<Text className={`w-3 h-3 ${status_color} rounded-full`}></Text>
					</View>
					<CardDescription>{descriptionText[status]}</CardDescription>
				</CardHeader>
				<ScrollView className="max-h-48">
					<CardContent className="gap-2 flex-wrap flex-row">
						{inverters.map((item) => (
							<Badge key={item} className="w-fit" variant={"secondary"}>
								<Text>{item}</Text>
							</Badge>
						))}
					</CardContent>
				</ScrollView>
				<CardFooter>
					<Badge className="mx-auto" variant={"outline"}>
						<Text>
							{inverters.length} / {inverterCount}
						</Text>
					</Badge>
				</CardFooter>
			</Card>
		</TabsContent>
	);
}
