import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../../App";
import LibraryDetails from "../../components/LibraryDetails";
import PageHeader from "../../components/PageHeader";
import { libraryDetails } from "../../constants/data";
import { droidSafeArea, Typography } from "../../styles";
import { useStatusBar } from "../../utils/Hooks";

interface WordLibraryScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "WordLibrary">;
}

const WordLibraryScreen: FC<WordLibraryScreenProps> = ({ navigation }) => {
  useStatusBar("dark-content");

  const handleWordsClick = (word: string) => {
    navigation.navigate("WordDetails", { word });
  };

  return (
    <SafeAreaView style={droidSafeArea}>
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
