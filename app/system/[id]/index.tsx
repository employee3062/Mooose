import { Feather, Fontisto } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { CardInfo } from "@/components/card-info";
import DashBox from "@/components/dash-box";
import SystemStatus from "@/components/system-status";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";
export default function SystemOverviewTab() {
	const [tab, setTab] = useState("today");
	return (
		<View className="w-full items-center p-4 gap-6">
			<View className="flex-row gap-3 items-center">
				<Image
					source={require("../../../assets/solar-panel-dummy.png")}
					style={{
						width: "50%",
						height: "auto",
						aspectRatio: 1.5,
						borderRadius: 8,
					}}
				/>
				<SystemStatus />
			</View>
			<ScrollView className="w-full " showsVerticalScrollIndicator={false}>
				<View className="w-full flex-1 mb-40 gap-3">
					<Card>
						<CardHeader>
							<CardTitle>Astronomy</CardTitle>
						</CardHeader>
						<CardContent className="flex-row justify-around">
							{/* sunrise */}
							<CardInfo title="Sunrise" val="6:12 AM">
								<Feather name="sunrise" size={24} color="orange" />
							</CardInfo>
							<CardInfo title="Sunset" val="6:12 PM">
								<Feather name="sunset" size={24} color="orange" />
							</CardInfo>
							<CardInfo title="Phase" val="Day">
								<Fontisto name="day-haze" size={24} color="orange" />
							</CardInfo>
						</CardContent>
						<CardFooter>
							<Text className="text-[8px]">@googleapis.com</Text>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>System Dashboard</CardTitle>
						</CardHeader>
						<CardContent>
							<Tabs value={tab} onValueChange={setTab}>
								<TabsList className="mx-auto">
									<TabsTrigger value="today">
										<Text>Today</Text>
									</TabsTrigger>
									<TabsTrigger value="week">
										<Text>Week</Text>
									</TabsTrigger>
									<TabsTrigger value="month">
										<Text>Month</Text>
									</TabsTrigger>
									<TabsTrigger value="year">
										<Text>Year</Text>
									</TabsTrigger>
								</TabsList>
								<TabsContent value={tab} className="mt-4">
									<View className="flex-row items-center gap-2">
										<View className="gap-2 w-1/2 h-full">
											<DashBox title="Current Power" value="24 kWh" />
											<DashBox title="Energy" value="500 kWh" />
											<DashBox title="CO2 Saved" value="80%" />
										</View>
										<View className="gap-2 w-1/2 h-full">
											<DashBox title="Revenue" value="$1200.67" />
											<DashBox title="Expected Revenue" value="$1500.25" />
										</View>
									</View>
								</TabsContent>
							</Tabs>
						</CardContent>
						<CardFooter>
							<Text className="text-[8px]">@inverto.com</Text>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Weather Info</CardTitle>
						</CardHeader>
						<CardContent className="gap-6 justify-around">
							{/* temperature */}
							<View className="flex-row gap-4">
								<CardInfo title="Temperature" val="25°C">
									<Feather name="thermometer" size={24} color="orange" />
								</CardInfo>
								<CardInfo title="Humidity" val="60%">
									<Feather name="droplet" size={24} color="orange" />
								</CardInfo>
								<CardInfo title="UV Index" val="5">
									<Feather name="sun" size={24} color="orange" />
								</CardInfo>
							</View>
							<View className="flex-row gap-4">
								<CardInfo title="Wind" val="15 km/h">
									<Feather name="wind" size={24} color="orange" />
								</CardInfo>
								<CardInfo title="Cloud Cover" val="20%">
									<Feather name="cloud" size={24} color="orange" />
								</CardInfo>
								<CardInfo title="Precipitation" val="0 mm">
									<Feather name="umbrella" size={24} color="orange" />
								</CardInfo>
							</View>
						</CardContent>
						<CardFooter>
							<Text className="text-[8px]">@googleapis.com</Text>
						</CardFooter>
					</Card>
				</View>
			</ScrollView>
		</View>
	);
}
