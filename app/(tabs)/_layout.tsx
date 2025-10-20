import { Ionicons } from "@expo/vector-icons";
import { Tabs, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { MoonStarIcon, SunIcon } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import { type Edge, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

const HOME_SCREEN_OPTIONS = {
	headerTitle: () => (
		<View className="flex-row items-center">
			<Text className="text-3xl">Solar Systems</Text>
			<Icon as={SunIcon} className="size-5 ml-2 mt-1 text-yellow-500" />
		</View>
	),
	headerTitleAlign: "left" as "left",
	headerShadowVisible: false,
	headerRight: () => <ThemeToggle />,
	headerStyle: {
		height: 120,
	},
	title: "Home",
	tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
		<Ionicons
			name={focused ? "home" : "home-outline"}
			size={24}
			color={color}
		/>
	),
};
const CHAT_SCREEN_OPTIONS = {
	headerTitle: "Chatbot",
	headerShown: false,
	title: "Chat",
	tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
		<Ionicons
			name={focused ? "chatbubbles" : "chatbubbles-outline"}
			size={24}
			color={color}
		/>
	),
};

const FEEDBACK_SCREEN_OPTIONS = {
	headerShown: false,
	title: "Feedback",
	tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
		<Ionicons
			name={focused ? "help-circle" : "help-circle-outline"}
			size={24}
			color={color}
		/>
	),
};

const THEME_ICONS = {
	light: SunIcon,
	dark: MoonStarIcon,
};

function ThemeToggle() {
	const { colorScheme, toggleColorScheme } = useColorScheme();
	return (
		<Button
			onPressIn={toggleColorScheme}
			size="icon"
			variant="ghost"
			className="ios:size-9 rounded-full web:mx-4"
		>
			<Icon as={THEME_ICONS[colorScheme ?? "light"]} className="size-5" />
		</Button>
	);
}

export default function TabsLayout() {
	const { colorScheme } = useColorScheme();
	const segments = useSegments();

	// Determine current active route segment (first segment after root)
	const currentSegment = segments[1]; // e.g. "chatbot", "feedback"

	// Conditional edges based on active tab
	const edges: readonly Edge[] = !(
		currentSegment === "chatbot" || currentSegment === "feedback"
	)
		? (["left", "right"] as readonly Edge[]) // no top edge for Home
		: (["top", "left", "right"] as readonly Edge[]); // top edge for others

	return (
		<SafeAreaView style={{ flex: 1 }} edges={edges}>
			<StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
			<Tabs>
				<Tabs.Screen name="index" options={HOME_SCREEN_OPTIONS} />
				<Tabs.Screen name="chatbot" options={CHAT_SCREEN_OPTIONS} />
				<Tabs.Screen name="feedback" options={FEEDBACK_SCREEN_OPTIONS} />
			</Tabs>
		</SafeAreaView>
	);
}
