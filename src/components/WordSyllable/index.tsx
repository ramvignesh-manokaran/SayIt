import React, { FC } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors, Typography } from "../../styles";

interface WordSyllableProps {
  word: string;
  syllable: string;
  onPress: (word: string) => void;
}

const WordSyllable: FC<WordSyllableProps> = ({ word, syllable, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onPress(word)} style={styles.container}>
        <Text style={styles.wordText}>{word}</Text>
        <Text style={styles.syllableText}>{syllable}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WordSyllable;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  wordText: {
    ...Typography.normal,
    fontWeight: "bold",
    paddingRight: 5
  },
  syllableText: {
    ...Typography.normal,
    color: Colors.GRAY
  }
});
