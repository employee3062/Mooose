// app/modal.tsx

import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";
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
	const backgroundColor = colorScheme === "dark" ? "#121212" : "#FFFFFF";

	return (
		<BottomSheetModal
			ref={bottomSheetModalRef}
			index={1}
			snapPoints={snapPoints}
			onDismiss={handleDismiss}
			backgroundStyle={{ backgroundColor }}
			handleIndicatorStyle={{
				backgroundColor: colorScheme === "dark" ? "white" : "gray",
			}}
		>
			<BottomSheetScrollView style={styles.contentContainer}>
				<Text variant="h2" className="mb-4">
					System Details
				</Text>
				<Text className="text-center">
					Here you can display more detailed information about the system,
					including performance metrics, historical data, and other relevant
					details.
				</Text>
			</BottomSheetScrollView>
		</BottomSheetModal>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		padding: 24,
	},
});
