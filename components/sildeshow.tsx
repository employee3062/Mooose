import type React from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");
const SLIDE_WIDTH = width * 0.9; // Use 90% of width to match w-[90vw] in your slides

export default function Slideshow({ items }: { items: React.ReactNode[] }) {
	return (
		<View style={{ width: width, height: 240, alignItems: "center" }}>
			<Carousel
				width={SLIDE_WIDTH}
				height={240}
				data={items}
				renderItem={({ item }) => (
					<View
						style={{
							width: SLIDE_WIDTH,
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{item}
					</View>
				)}
				loop={false}
				style={{ backgroundColor: "transparent" }}
				pagingEnabled
				autoPlay={false}
			/>
		</View>
	);
}
