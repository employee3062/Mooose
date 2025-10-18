import "@/global.css";

import { ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { NAV_THEME } from "@/lib/theme";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
	const { colorScheme } = useColorScheme();
	return (
		<ThemeProvider value={NAV_THEME[colorScheme ?? "light"]}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen
					name="modal"
					options={{ presentation: "modal", headerShown: false }}
				/>
				<Stack.Screen name="+not-found" />
			</Stack>
			<PortalHost />
		</ThemeProvider>
	);
}
