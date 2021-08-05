import React, { FC } from "react";
import { ImageSourcePropType, View, Text, StyleSheet } from "react-native";
import { CategoryContent } from "../../constants/data";
import { blockType, CategoryBlock } from "../CategoryBlock";

interface Props {
	type: blockType;
	rowContent: CategoryContent[];
	colour: string | string[];
	imageStyles?: any;
	onBlockPress: () => void;
}

export const CategoryRow: FC<Props> = ({
	type,
	rowContent,
	colour,
	imageStyles,
	onBlockPress
}) => {
	const renderRow = rowContent.map((content, idx) => {
		return (
		<CategoryBlock 
			colour={Array.isArray(colour) ? colour[idx] : colour}
			type={type}
			categoryContent={content}
			imageStyles={imageStyles}
			onBlockPress={onBlockPress}
		/>
	)
	})
	
	return (
		<View style={styles.row}>
			{renderRow}
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		justifyContent: "space-evenly"
	}
})