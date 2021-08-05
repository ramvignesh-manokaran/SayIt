import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { voiceAndConsonantCategories } from "../../constants/data";
import { blockType } from "../CategoryBlock";
import { CategoryRow } from "../CategoryRow";

const rowColours = ["#5DB075", "#FFB84E"];

interface Props {
	onBlockPress: () => void;
}

const VowelsAndConsonantsSection: FC<Props> = ({onBlockPress})=> {
	const renderSection = voiceAndConsonantCategories.map(
		(row, idx) => (
			<CategoryRow 
				type={blockType.text}
				rowContent={row}
				colour={rowColours[idx]}
				key={idx}
				onBlockPress={onBlockPress}
			/>
		)
	);
	return (
		<View>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>
					Vowels & Consonants
				</Text>
			</View>
			{renderSection}
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
		paddingLeft: 15,
	}
})

export default VowelsAndConsonantsSection;