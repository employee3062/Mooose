import { View } from "react-native";
import { TimezoneClock } from "@/components/clock";
import { InverterCard } from "@/components/inverter-card";
import { SystemMap } from "@/components/maps";
import { NumberInput } from "@/components/num-input";
import Slideshow from "@/components/sildeshow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

export default function SystemDetailsTab() {
	// In your component:
	return (
		<View className="flex-1 p-4 gap-2">
			<TimezoneClock />
			<Card className="border-0">
				<CardHeader className="flex-row justify-between items-center">
					<View>
						<CardTitle className="text-sm font-bold">
							sys ID - 1234567890ABCDEF
						</CardTitle>
						<Text className="text-xs text-muted-foreground">
							Last Updated: 2024-06-15 14:30:00
						</Text>
					</View>
					<View className="flex-row items-center gap-1">
						<NumberInput min={1} max={400} />
						<Text className="text-lg">/ 17</Text>
					</View>
				</CardHeader>
				<CardContent className="items-center">
					<Slideshow
						items={[
							<InverterCard key={1} />,
							<InverterCard key={2} />,
							<InverterCard key={3} />,
						]}
					/>
				</CardContent>
			</Card>
			<View className="flex-1 justify-center items-center">
				<SystemMap />
			</View>
		</View>
	);
}
