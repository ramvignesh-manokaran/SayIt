import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { topicCategories } from "../../constants/data";
import { blockType } from "../CategoryBlock";
import { CategoryRow } from "../CategoryRow";

interface Props {
	onBlockPress: () => void;
}

const blockColours = ["#7BD8FF", "#FD7366", "#A160FB"]

export const TopicsSection: FC<Props> = ({onBlockPress}) => {
	return (
		<View >
			<View style={styles.titleContainer}>
				<Text style={styles.title}>
					Topics
				</Text>
			</View>
			<CategoryRow type={blockType.image} rowContent={topicCategories} colour={blockColours} onBlockPress={onBlockPress}/>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 22,
		fontWeight: "bold"
	},
	titleContainer: {
		paddingBottom: 15,
		paddingLeft: 15
	}
})