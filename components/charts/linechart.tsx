import { Circle, useFont } from "@shopify/react-native-skia";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import { useDerivedValue } from "react-native-reanimated";
import { Area, CartesianChart, useChartPressState } from "victory-native";
import roboto from "../../assets/roboto/Roboto-Regular.ttf";
import { Text } from "../ui/text";

export function PowerChart() {
	const font = useFont(roboto, 9);
	const { colorScheme } = useColorScheme();
	const { state, isActive } = useChartPressState({ x: 0, y: { power: 0 } });

	// Properly read shared values using useDerivedValue
	const tooltipText = useDerivedValue(() => {
		if (!isActive.valueOf()) return "";
		const hour = Math.round(state.x.value.value);
		const power = state.y.power.value.value;
		return `${String(hour).padStart(2, "0")}:00 - ${power.toFixed(2)} kW`;
	});

	return (
		<View className="w-full h-96 gap-2">
			<Text className="text-sm text-center my-2">Daily Power Flow (kW)</Text>
			<CartesianChart
				data={DATA}
				xKey="hour"
				yKeys={["power"]}
				domain={{ x: [0, 25] }}
				axisOptions={{
					lineColor: "lightgray",
					labelColor: colorScheme === "dark" ? "white" : "black",
					labelOffset: {
						x: 5,
						y: 10,
					},
					tickValues: {
						x: [0, 3, 6, 9, 12, 15, 18, 21, 24],
						y: [0, 2, 4, 6],
					},
					formatXLabel: (value) => `${String(value).padStart(2, "0")}:00`,
					formatYLabel: (value) => `${value.toFixed(1)} kW`,
					font,
				}}
				chartPressState={state}
			>
				{({ points, chartBounds }) => (
					<>
						<Area
							points={points.power}
							y0={chartBounds.bottom}
							color="#FFA500"
							opacity={0.7}
							curveType="natural"
							animate={{ type: "timing", duration: 300 }}
						/>
						{isActive && (
							<>
								{/* Active point circle */}
								<Circle
									cx={state.x.position}
									cy={state.y.power.position}
									r={5}
									color="#FFA500"
									opacity={1}
								/>
								{/* Tooltip inside chart */}
								<ToolTip
									x={state.x.position}
									y={state.y.power.position}
									text={tooltipText}
									chartBounds={chartBounds}
								/>
							</>
						)}
					</>
				)}
			</CartesianChart>
		</View>
	);
}

// Tooltip component rendered inside chart using Skia
import {
	Group,
	RoundedRect,
	Text as SkiaText,
} from "@shopify/react-native-skia";
import type { SharedValue } from "react-native-reanimated";

function ToolTip({
	x,
	y,
	text,
	chartBounds,
}: {
	x: SharedValue<number>;
	y: SharedValue<number>;
	text: SharedValue<string>;
	chartBounds: { left: number; right: number; top: number; bottom: number };
}) {
	const font = useFont(roboto, 11);

	// Measure text width using new API
	const textWidth = useDerivedValue(() => {
		if (!font) return 0;
		const measured = font.measureText(text.value);
		return measured?.width || 0;
	});

	const boxWidth = 110;
	const boxHeight = 25;
	const padding = 10;

	// Smart positioning to keep tooltip inside chart bounds
	const tooltipX = useDerivedValue(() => {
		const centered = x.value - boxWidth / 2;
		const minX = chartBounds.left + padding;
		const maxX = chartBounds.right - boxWidth - padding;

		// Clamp between min and max
		return Math.max(minX, Math.min(maxX, centered));
	});

	return (
		<Group>
			{/* Tooltip background box */}
			<RoundedRect
				x={tooltipX}
				y={useDerivedValue(() => y.value - 35)}
				width={boxWidth}
				height={boxHeight}
				r={4}
				color="rgba(0, 0, 0, 0.8)"
			/>
			{/* Tooltip text - centered in box */}
			<SkiaText
				x={useDerivedValue(
					() => tooltipX.value + (boxWidth - textWidth.value) / 2,
				)}
				y={useDerivedValue(() => y.value - 18)}
				text={text}
				font={font}
				color="white"
			/>
		</Group>
	);
}

// Generate 24 hours of power data (includes hour 24)
const DATA = Array.from({ length: 25 }, (_, i) => ({
	hour: i,
	power: i >= 6 && i <= 18 ? 2 + Math.random() * 3 : 0.2 + Math.random() * 0.5,
}));
