import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
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

export function SystemCard({
	sysName,
	sysAddress,
	imgUrl,
	totalInverters,
	peakPower,
	currentPower,
}: {
	sysName: string;
	sysAddress: string;
	imgUrl?: string;
	totalInverters: number;
	peakPower: number;
	currentPower: number;
}) {
	const router = useRouter();
	const randomId = Math.floor(Math.random() * 1000);
	let imgDefault: number;
	if (totalInverters > 1 && currentPower === 0) {
		imgDefault = require("../assets/solar-panel-dummy-2-night.png");
	} else if (totalInverters > 1) {
		imgDefault = require("../assets/solar-panel-dummy-2.png");
	} else if (currentPower === 0) {
		imgDefault = require("../assets/solar-panel-dummy-night.png");
	} else {
		imgDefault = require("../assets/solar-panel-dummy.png");
	}
	return (
		<Pressable onPress={() => router.push(`/system/${randomId}`)}>
			<Card className="w-80 p-0 gap-4">
				<CardHeader className="px-2 pb-0 pt-3 items-center">
					<CardTitle className="pb-1">{sysName}</CardTitle>
					<CardDescription>
						<Text>{sysAddress}</Text>
					</CardDescription>
				</CardHeader>
				<CardContent className="flex-row gap-3">
					<Image
						source={imgUrl ? { uri: imgUrl } : imgDefault}
						style={{ width: "50%", height: "auto", aspectRatio: 1.5 }}
					/>
					<SystemStatus
						currentPower={currentPower}
						peakPower={peakPower}
						totalInverters={totalInverters}
					/>
				</CardContent>
				<CardFooter className="mx-auto gap-4 border-t border-gray-200 p-0 flex-row">
					<MiniInfo value={currentPower} unit="kW" label="current" />
					<Text className="border-l h-[60%] border-gray-200" />
					<MiniInfo value={35} unit="kWh" label="today" />
					<Text className="border-l h-[60%] border-gray-200" />
					<MiniInfo value={"Just now"} unit="" label="updated" />
				</CardFooter>
			</Card>
		</Pressable>
	);
}
