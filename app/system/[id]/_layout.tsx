import { Ionicons } from "@expo/vector-icons";
import { router, Stack, Tabs, useLocalSearchParams } from "expo-router";
import { type Edge, SafeAreaView } from "react-native-safe-area-context";

const OVERVIEW_OPTIONS = {
	headerShown: false,
	title: "Overview",
	tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
		<Ionicons
			name={focused ? "planet" : "planet-outline"}
			size={24}
			color={color}
		/>
	),
};
const PERFORMANCE_SCREEN_OPTIONS = {
	headerShown: false,
	title: "Performance",
	tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
		<Ionicons
			name={focused ? "speedometer" : "speedometer-outline"}
			size={24}
			color={color}
		/>
	),
};

const DETAILS_SCREEN_OPTIONS = {
	headerShown: false,
	title: "Details",
	tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
		<Ionicons
			name={focused ? "information-circle" : "information-circle-outline"}
			size={24}
			color={color}
		/>
	),
};

export default function TabsLayout() {
	const edges: readonly Edge[] = ["left", "right"] as readonly Edge[];
	const { id } = useLocalSearchParams();
	return (
		<SafeAreaView style={{ flex: 1 }} edges={edges}>
			<Stack.Screen
				options={{
					title: `User: ${id}`, // Dynamic title using URL parameter
					headerBackVisible: false,
					headerLeft: ({ tintColor }) => (
						<Ionicons
							className="mx-1.5"
							onPress={() => {
								router.back();
							}}
							name="arrow-back"
							size={24}
							color={tintColor}
						/>
					),
				}}
			/>
			<Tabs>
				<Tabs.Screen name="index" options={OVERVIEW_OPTIONS} />
				<Tabs.Screen name="performance" options={PERFORMANCE_SCREEN_OPTIONS} />
				<Tabs.Screen name="details" options={DETAILS_SCREEN_OPTIONS} />
			</Tabs>
		</SafeAreaView>
	);
}
