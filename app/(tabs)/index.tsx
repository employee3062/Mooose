import { useHeaderHeight } from "@react-navigation/elements";
import { Tabs } from "expo-router";
import { MoonStarIcon, SunIcon } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SystemCard } from "@/components/system-card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

const SCREEN_OPTIONS = {
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
};

export default function HomeTab() {
	const headerHeight = useHeaderHeight();
	return (
		<SafeAreaView style={{ flex: 1 }} edges={["left", "right"]}>
			<Tabs.Screen options={SCREEN_OPTIONS} />
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
		</SafeAreaView>
	);
}

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
