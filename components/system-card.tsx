import { Image } from "expo-image";
import { MiniInfo } from "./mini-info";
import SystemStatus from "./system-status";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Text } from "./ui/text";

export function SystemCard() {
	return (
		<Card className="w-80 p-0 gap-4">
			<CardHeader className="px-2 pb-0 pt-3 items-center">
				<CardTitle className="pb-1">Jazz Miigwetch I</CardTitle>
				<CardDescription>
					<Text>5977 Hazeldean Rd, Stittsvile, CA</Text>
				</CardDescription>
			</CardHeader>
			<CardContent className="flex-row gap-3">
				<Image
					source={require("../assets/solar-panel-dummy.png")}
					style={{ width: "50%", height: "auto", aspectRatio: 1.5 }}
				/>
				<SystemStatus />
			</CardContent>
			<CardFooter className="mx-auto gap-4 border-t border-gray-200 p-0 flex-row">
				<MiniInfo />
				<Text className="border-l h-[60%] border-gray-200" />
				<MiniInfo />
				<Text className="border-l h-[60%] border-gray-200" />
				<MiniInfo />
			</CardFooter>
		</Card>
	);
}
