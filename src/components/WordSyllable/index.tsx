import React, { FC } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors, Typography } from "../../styles";

interface WordSyllableProps {
  word: string;
  syllable: string;
  showTick?: boolean;
  showExpand?: boolean;
  onPress: (word: string) => void;
}

const WordSyllable: FC<WordSyllableProps> = ({
  word,
  syllable,
  onPress,
  showTick,
  showExpand
}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onPress(word)} style={styles.container}>
        <Text style={styles.wordText}>{word}</Text>
        <Text style={styles.syllableText}>{syllable}</Text>
        {showTick && (
          <View style={styles.tickView}>
            <MaterialCommunityIcons
              color={Colors.GREEN}
              size={24}
              name="check-circle"
            />
          </View>
        )}
        {!showTick && showTick !== undefined && (
          <View style={styles.tickView}>
            <MaterialCommunityIcons
              color={Colors.LIGHT_GRAY}
              size={24}
              name="circle-outline"
            />
          </View>
        )}
        {showExpand && (
          <View style={styles.tickView}>
            <MaterialCommunityIcons size={24} name="greater-than" />
          </View>
        )}
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
  },
  tickView: {
    alignItems: "flex-end",
    flex: 1
  }
});
