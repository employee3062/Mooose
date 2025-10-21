import { Text } from "@/components/ui/text";
import { Badge } from "./ui/badge";

export default function DashBox({
	title,
	value,
}: {
	title: string;
	value: string;
}) {
	return (
		<Badge
			variant={"outline"}
			className="w-full p-4 rounded-lg flex-col flex-1 items-center justify-center"
		>
			<Text className="text-xs font-medium text-center">{title}</Text>
			<Text className="text-lg font-bold text-[#FFA500] text-center">
				{value}
			</Text>
		</Badge>
	);
}
