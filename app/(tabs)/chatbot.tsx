import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";
export default function ChatbotTab() {
	return (
		<SafeAreaView style={{ flex: 1 }} edges={["left", "right"]}>
			<Tabs.Screen options={{ headerTitle: "Chatbot" }} />
			<Text>Chatbot</Text>
		</SafeAreaView>
	);
}
