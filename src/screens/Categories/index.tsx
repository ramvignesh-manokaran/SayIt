import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../../App";
import PageHeader from "../../components/PageHeader";
import { TopicsSection } from "../../components/TopicsSection";
import VowelsAndConsonantsSection from "../../components/VowelsAndConsonantsSection";
import { droidSafeArea } from "../../styles";

interface Props {
	navigation: StackNavigationProp<RootStackParamList, "Category">;
}

const CategoriesScreen: FC<Props> = ({navigation}) => {
	const onTopicPress = () => {
		navigation.navigate("Topic")
	}
	return (
		<SafeAreaView style={droidSafeArea}>
			<PageHeader text="Categories"/>
			<VowelsAndConsonantsSection onBlockPress={onTopicPress}/>
			<TopicsSection onBlockPress={onTopicPress}/>
		</SafeAreaView>
	)
}

export default CategoriesScreen;