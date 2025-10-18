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
				<SystemCard />
				<SystemCard />
				<SystemCard />
			</View>
		</ScrollView>
	);
}
