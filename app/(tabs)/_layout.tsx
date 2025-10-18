import { ThemeProvider } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { NAV_THEME } from "@/lib/theme";

export default function TabsLayout() {
	const { colorScheme } = useColorScheme();
	return (
		<ThemeProvider value={NAV_THEME[colorScheme ?? "light"]}>
			<StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
			<Tabs />
		</ThemeProvider>
	);
}
