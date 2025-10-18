import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";

export default function Modal() {
	return (
		<SafeAreaView style={{ flex: 1 }} edges={["left", "right"]}>
			<Text>Modal Screen</Text>
		</SafeAreaView>
	);
}
