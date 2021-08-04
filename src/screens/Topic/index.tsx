import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../../../App";
import Line from "../../components/Line";
import PageHeader from "../../components/PageHeader";
import WordSyllable from "../../components/WordSyllable";
import { Conversation, wordSyllables } from "../../constants/data";
import { Colors, droidSafeArea } from "../../styles";
import { useStatusBar } from "../../utils/Hooks";

interface TopicScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "WordLibrary">;
}

const TopicScreen: FC<TopicScreenProps> = ({ navigation }) => {
  useStatusBar("light-content");

  const handleWordsClick = (word: string) => {
    navigation.navigate("WordDetails", { word });
  };

  return (
    <SafeAreaView style={[droidSafeArea, styles.container]}>
      <PageHeader text={"Conversation"} />
      <View style={styles.description}>
        <Text>You have learnt 5 out of 18 words</Text>
        <Line style={styles.line} />
      </View>
      <View style={styles.conversation}>
        {wordSyllables.map((item: Conversation, index: number) => (
          <>
            <WordSyllable
              key={index}
              word={item.word}
              syllable={item.syllable}
              onPress={handleWordsClick}
              showTick={item.learnt}
            />
            <Line />
          </>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default TopicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.AQUA
  },
  description: {
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15
  },
  line: {
    borderBottomColor: Colors.GRAY
  },
  conversation: {
    backgroundColor: Colors.WHITE,
    padding: 15
  }
});
