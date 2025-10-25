import { useState } from "react";
import { View } from "react-native";
import { PowerBarChart } from "@/components/charts/barchart";
import { PowerChart } from "@/components/charts/linechart";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";

export default function SystemPerformanceTab() {
	const [selectedTab, setSelectedTab] = useState("Today");
	return (
		<View className="flex-1 justify-center p-4">
			<Card>
				<CardHeader>
					<CardTitle>Performance Trends</CardTitle>
					<CardDescription>
						See how your system is performing over time.
					</CardDescription>
				</CardHeader>
				<CardContent className="py-6">
					<Tabs value={selectedTab} onValueChange={setSelectedTab}>
						<TabsList className="mx-auto">
							<TabsTrigger value="Today">
								<Text>Today</Text>
							</TabsTrigger>
							<TabsTrigger value="Week">
								<Text>Week</Text>
							</TabsTrigger>
							<TabsTrigger value="Month">
								<Text>Month</Text>
							</TabsTrigger>
							<TabsTrigger value="Year">
								<Text>Year</Text>
							</TabsTrigger>
						</TabsList>
						<TabsContent value={selectedTab}>
							{selectedTab === "Today" ? <PowerChart /> : <PowerBarChart />}
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</View>
	);
}
