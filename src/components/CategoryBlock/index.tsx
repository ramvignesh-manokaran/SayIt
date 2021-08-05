import React, { FC } from "react";
import { View, Text, StyleSheet, Image, ImageSourcePropType, Pressable } from "react-native";
import { CategoryContent } from "../../constants/data";

export enum blockType {
	image = "IMAGE",
	text = "TEXT"
}

interface Props {
	categoryContent: CategoryContent;
	colour: string;
	type: blockType;
	imageStyles?: any;
	onBlockPress?: () => void;
}

export const CategoryBlock: FC<Props> = ({
	categoryContent,
	colour,
	type,
	imageStyles,
	onBlockPress
}) => {
	const renderText = (texts: string[]) => (
		<>
			<View style={[styles.textUpper]}>
				<Text style={styles.blockText}>
					{texts[0]}
				</Text>
			</View>
			<View style={[styles.textLower]}>
				<Text style={styles.blockText}>
					{texts[1]}
				</Text>
			</View>
		</>
	)

	const renderImage = (imageSrc: ImageSourcePropType) => (
		<Image source={imageSrc} style={[styles.image, imageStyles]} />
	)

	return (
		<View style={styles.container}>
			<Pressable onPress={onBlockPress} style={[styles.block, {backgroundColor: colour}]}>
				{type === blockType.text ? 
					renderText(categoryContent.content as string[]) : 
					renderImage(categoryContent.content as ImageSourcePropType)
				}
			</Pressable>
			<Text style={styles.title}>
				{categoryContent.title}
			</Text>
			<Text style={styles.subtitle}>
				{categoryContent.subtitle}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 110
	},
	block: {
		backgroundColor: "#FFB84E",
		width: 110,
		height: 110,
		borderRadius: 11,
		marginBottom: 8,
		justifyContent: "center",
		alignItems: "center"
	},
	image: {
		width: 100,
		height: 100
	},
	textUpper: {
		flexDirection: "row",
		marginLeft: 15,
		paddingBottom: 0
	},
	textLower: {
		flexDirection: "row-reverse",
		fontSize: 36,
		marginLeft: 15
	},
	blockText: {
		fontSize: 36,
		color: "white"
	},
	title: {
		fontSize: 14,
		fontWeight: "bold",
		flexWrap: "wrap"
	},
	subtitle: {
		fontSize: 14
	}
})