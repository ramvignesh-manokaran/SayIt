import { StyleSheet } from "react-native";

const barHeight = 50;

export const styles = StyleSheet.create({
	controlBar: {
		position: "absolute",
		width: "80%",
		bottom: 30,
		flexDirection: "row",
	},
	scrubber: {
		flexGrow: 1,
		justifyContent: "center",
		paddingHorizontal: 10,
		paddingVertical: 10,
		backgroundColor: "#fff",
		borderRadius: barHeight / 2,
		marginRight: 20
	},
  slowMoButton: {
		width: barHeight,
		height: barHeight,
		borderRadius: barHeight / 2,
		justifyContent: "center",
		alignItems: "center"
	}
})