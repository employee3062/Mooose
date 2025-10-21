import "@/global.css";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NAV_THEME } from "@/lib/theme";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
	const { colorScheme } = useColorScheme();
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<ThemeProvider value={NAV_THEME[colorScheme ?? "light"]}>
				<BottomSheetModalProvider>
					<Stack>
						<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
						<Stack.Screen
							name="modal"
							options={{
								presentation: "containedTransparentModal",
								headerShown: false,
								animation: "slide_from_bottom",
							}}
						/>
						<Stack.Screen name="+not-found" />
					</Stack>
				</BottomSheetModalProvider>
				<PortalHost />
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}
