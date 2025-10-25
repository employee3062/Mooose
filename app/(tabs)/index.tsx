import { useHeaderHeight } from "@react-navigation/elements";
import { ScrollView, View } from "react-native";
import { SystemCard } from "@/components/system-card";

export default function HomeTab() {
	const headerHeight = useHeaderHeight();
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
		>
			<View
				className="items-center gap-3"
				style={{ paddingVertical: headerHeight / 4 }}
			>
				<SystemCard
					sysName="Jazz Miigwetch I"
					sysAddress="5977 Hazeldean Rd, Stittsville, CA"
					totalInverters={10}
					peakPower={5.5}
					currentPower={2.3}
				/>
				<SystemCard
					sysName="Jazz Miigwetch X"
					sysAddress="238 Corduroy Road, Vars, CA"
					totalInverters={8}
					peakPower={4.0}
					currentPower={0}
				/>
				<SystemCard
					sysName="Wizard Bow"
					sysAddress="123 Elm St, Ottawa, CA"
					totalInverters={1}
					peakPower={6.0}
					currentPower={3.0}
				/>
				<SystemCard
					sysName="Magician Mistik"
					sysAddress="101 Pine St, Ottawa, CA"
					totalInverters={1}
					peakPower={3.5}
					currentPower={0}
				/>
			</View>
		</ScrollView>
	);
}
