import { Ionicons } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Text } from "@/components/ui/text";
export default function SystemScreen() {
	const { id } = useLocalSearchParams();
	return (
		<View>
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
			<Text>System Details for ID: {id}</Text>
		</View>
	);
}
