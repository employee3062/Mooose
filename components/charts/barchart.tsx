import { useFont } from "@shopify/react-native-skia";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import { useDerivedValue } from "react-native-reanimated";
import { Bar, CartesianChart, useChartPressState } from "victory-native";
import roboto from "../../assets/roboto/Roboto-Regular.ttf";
import { Text } from "../ui/text";

export function PowerBarChart() {
	const font = useFont(roboto, 10);
	const { colorScheme } = useColorScheme();
	const { state, isActive } = useChartPressState({ x: "", y: { power: 0 } });

	// Get the pressed bar's value
	const barValue = useDerivedValue(() => {
		if (!isActive.valueOf()) return "";
		return `${state.y.power.value.value.toFixed(2)} kW`;
	});

	return (
		<View className="w-[80vw] h-96 gap-2">
			<Text className="text-sm text-center my-2">Daily Power Flow (kW)</Text>
			<CartesianChart
				data={DATA}
				xKey="hour"
				yKeys={["power"]}
				domainPadding={{ left: 30, right: 30 }}
				domain={{ y: [0, 6] }}
				axisOptions={{
					lineColor: "lightgray",
					lineWidth: { grid: { x: 0, y: 1 }, frame: 1 },
					labelColor: colorScheme === "dark" ? "white" : "black",
					labelOffset: 10,
					tickCount: 8, // Force 8 ticks for 8 bars
					formatYLabel: (value) => `${value.toFixed(1)} kW`,
					font,
				}}
				chartPressState={state}
			>
				{({ points, chartBounds }) => (
					<>
						<Bar
							opacity={0.8}
							points={points.power}
							chartBounds={chartBounds}
							color="#FFA500"
							roundedCorners={{
								topLeft: 4,
								topRight: 4,
							}}
						/>
						{isActive && (
							<BarValueLabel
								x={state.x.position}
								y={state.y.power.position}
								value={barValue}
							/>
						)}
					</>
				)}
			</CartesianChart>
		</View>
	);
}

// Bar value label component
import {
	Group,
	RoundedRect,
	Text as SkiaText,
} from "@shopify/react-native-skia";
import type { SharedValue } from "react-native-reanimated";

function BarValueLabel({
	x,
	y,
	value,
}: {
	x: SharedValue<number>;
	y: SharedValue<number>;
	value: SharedValue<string>;
}) {
	const font = useFont(roboto, 11);

	const textWidth = useDerivedValue(() => {
		if (!font) return 0;
		const measured = font.measureText(value.value);
		return measured?.width || 0;
	});

	const boxWidth = 70;
	const boxHeight = 22;

	return (
		<Group>
			{/* Label background */}
			<RoundedRect
				x={useDerivedValue(() => x.value - boxWidth / 2)}
				y={useDerivedValue(() => y.value - boxHeight - 8)}
				width={boxWidth}
				height={boxHeight}
				r={4}
				color="rgba(0, 0, 0, 0.8)"
			/>
			{/* Label text */}
			<SkiaText
				x={useDerivedValue(() => x.value - textWidth.value / 2)}
				y={useDerivedValue(() => y.value - 14)}
				text={value}
				font={font}
				color="white"
			/>
		</Group>
	);
}

// Use STRING values for x-axis to create categorical scale
const DATA = [
	{ hour: "01:00", power: 0.2 },
	{ hour: "03:00", power: 0.3 },
	{ hour: "06:00", power: 1.5 },
	{ hour: "09:00", power: 3.2 },
	{ hour: "12:00", power: 4.5 },
	{ hour: "15:00", power: 3.8 },
	{ hour: "18:00", power: 2.1 },
	{ hour: "21:00", power: 0.6 },
];
