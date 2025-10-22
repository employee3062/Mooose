import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "@/components/ui/text";

export function TimezoneClock({ timezone = "America/New_York" }) {
	const [parts, setParts] = useState({
		hours: "--",
		minutes: "--",
		seconds: "--",
	});

	useEffect(() => {
		const update = () => {
			const now = DateTime.now().setZone(timezone);
			setParts({
				hours: now.toFormat("HH"),
				minutes: now.toFormat("mm"),
				seconds: now.toFormat("ss"),
			});
		};
		update();
		const interval = setInterval(update, 1000);
		return () => clearInterval(interval);
	}, [timezone]);

	return (
		<View className="pt-6 flex-row justify-center relative">
			{/* Hours */}
			<View className="items-center">
				<Text className="text-5xl font-bold">{parts.hours}</Text>
				<Text className="text-[#FFA500] text-xs mt-1 ml-1 tracking-widest">
					HOURS
				</Text>
			</View>
			<Text className="text-5xl font-bold mx-2 mb-6">:</Text>
			{/* Minutes */}
			<View className="items-center">
				<Text className="text-5xl font-bold">{parts.minutes}</Text>
				<Text className="text-[#FFA500] text-xs mt-1 ml-1 tracking-widest">
					MINUTES
				</Text>
			</View>
			<Text className="text-5xl font-bold mx-2 mb-6">:</Text>
			{/* Seconds */}
			<View className="items-center">
				<Text className="text-5xl font-bold">{parts.seconds}</Text>
				<Text className="text-[#FFA500] text-xs mt-1 ml-1 tracking-widest">
					SECONDS
				</Text>
			</View>
			{/* Timezone */}
			<View className="items-center absolute">
				<Text className="text-[8px] uppercase">
					{timezone.replace("_", " ")}
				</Text>
			</View>
		</View>
	);
}
