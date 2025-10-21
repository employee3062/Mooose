// app/modal.tsx

import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { StatusGrid } from "@/components/status-grid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";

export default function Modal() {
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);
	const router = useRouter();
	// Set snap points for the modal
	const snapPoints = useMemo(() => ["90%"], []);
	// Use a ref to open the modal on mount
	React.useEffect(() => {
		bottomSheetModalRef.current?.present();
	}, []);
	// Handle modal closing
	const handleDismiss = useCallback(() => {
		router.back();
	}, [router]);
	const { colorScheme } = useColorScheme();
	const [tab, setTab] = React.useState("red");
	return (
		<BottomSheetModal
			ref={bottomSheetModalRef}
			index={1}
			snapPoints={snapPoints}
			onDismiss={handleDismiss}
			backgroundStyle={{
				backgroundColor: colorScheme === "dark" ? "#121212" : "#fbf3e9",
			}}
			handleIndicatorStyle={{
				backgroundColor: colorScheme === "dark" ? "white" : "gray",
			}}
		>
			<BottomSheetView style={styles.contentContainer}>
				<View className="gap-2">
					<Avatar alt="Moose Status Image" className="w-32 h-32 mx-auto ml-4">
						<AvatarImage source={require("../assets/moose-day.png")} />
						<AvatarFallback>
							<Text>?</Text>
						</AvatarFallback>
					</Avatar>
					<Text className="text-center font-bold text-green-500">Green</Text>
					<Text className="text-center font-bold text-sm text-gray-400">
						17 System Inverters
					</Text>
					<Text className="text-center font-bold text-xs text-gray-500">
						Oct 20,2025, 8:38 AM
					</Text>
				</View>
				<View className="w-full max-w-sm gap-6">
					<Tabs value={tab} onValueChange={setTab}>
						<TabsList className="mx-auto">
							<TabsTrigger value="red">
								<Text>Red</Text>
							</TabsTrigger>
							<TabsTrigger value="green">
								<Text>Green</Text>
							</TabsTrigger>
							<TabsTrigger value="moon">
								<Text>Moon</Text>
							</TabsTrigger>
						</TabsList>
						<StatusGrid
							status="red"
							inverterCount={17}
							inverters={["Inverter 01", "Inverter 02"]}
						/>
						<StatusGrid
							status="green"
							inverterCount={17}
							inverters={[
								"Inverter 03",
								"Inverter 04",
								"Inverter 05",
								"Inverter 06",
								"Inverter 07",
								"Inverter 08",
								"Inverter 09",
								"Inverter 10",
								"Inverter 11",
								"Inverter 12",
								"Inverter 13",
								"Inverter 14",
								"Inverter 15",
								"Inverter 16",
								"Inverter 17",
							]}
						/>
						<StatusGrid
							status="moon"
							inverterCount={17}
							inverters={["Inverter 18", "Inverter 19", "Inverter 20"]}
						/>
					</Tabs>
				</View>
			</BottomSheetView>
		</BottomSheetModal>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		height: "100%",
		padding: 24,
		gap: 32,
		justifyContent: "center",
		alignItems: "center",
	},
});
