import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { RootStackParamList } from "../../../App";
import LibraryDetails from "../../components/LibraryDetails";
import PageHeader from "../../components/PageHeader";
import { libraryDetails } from "../../constants/data";
import { droidSafeArea, Typography } from "../../styles";

interface WordLibraryScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "WordLibrary">;
}

const WordLibraryScreen: FC<WordLibraryScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={droidSafeArea}>
      <PageHeader text={"Word Library"} />
      <LibraryDetails data={libraryDetails} />
    </SafeAreaView>
  );
};

export default WordLibraryScreen;

const styles = StyleSheet.create({
  pageHeader: {
    paddingTop: 10
  },
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
