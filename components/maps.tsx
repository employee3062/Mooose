import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export function SystemMap() {
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				<Marker
					coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
					title="System Location"
					description="238 Coudray St, San Francisco, CA 94114"
					pinColor="orange"
				/>
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		borderRadius: 12,
		overflow: "hidden", // This clips child MapView
	},
	map: {
		flex: 1,
	},
});
