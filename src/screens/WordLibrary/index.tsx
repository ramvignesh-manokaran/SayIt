import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { RootStackParamList } from "../../../App";
import LibraryDetails from "../../components/LibraryDetails";
import PageHeader from "../../components/PageHeader";
import { libraryDetails } from "../../constants/data";
import { Colors, droidSafeArea, Typography } from "../../styles";

interface WordLibraryScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "WordLibrary">;
}

const WordLibraryScreen: FC<WordLibraryScreenProps> = ({ navigation }) => {
  const handleWordsClick = (word: string) => {
    navigation.navigate("WordDetails", { word });
  };

  return (
    <SafeAreaView style={droidSafeArea}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle={"dark-content"} />
      <PageHeader text={"Word Library"} />
      <LibraryDetails data={libraryDetails} onWordsClick={handleWordsClick} />
    </SafeAreaView>
  );
};

export default WordLibraryScreen;

const styles = StyleSheet.create({
  headerText: {
    ...Typography.header,
    fontWeight: "bold"
  },
  videoView: {
    position: "absolute",
    top: 75,
    right: 35,
    elevation: 10
  }
});
