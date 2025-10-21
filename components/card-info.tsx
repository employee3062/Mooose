import { View } from "react-native";
import { Text } from "@/components/ui/text";
export function CardInfo({
	children,
	title,
	val,
}: {
	children: React.ReactNode;
	title: string;
	val: string;
}) {
	return (
		<View className="flex-row gap-3 items-center">
			{children}
			<View>
				<Text className="text-xs text-muted-foreground">{title}</Text>
				<Text className="text-sm font-semibold">{val}</Text>
			</View>
		</View>
	);
}
