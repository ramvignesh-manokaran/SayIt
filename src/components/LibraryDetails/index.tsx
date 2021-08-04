import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Typography } from "../../styles";
import Line from "../Line";
import WordSyllable from "../WordSyllable";

export interface LibraryDetail {
  header: string;
  word: string;
  syllable: string;
}

interface LibraryDetailsProps {
  data: LibraryDetail[];
}

const LibraryDetails: FC<LibraryDetailsProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((data: LibraryDetail, index: number) => (
        <View style={styles.detail} key={index}>
          <Text style={styles.header}>{data.header}</Text>
          <Line />
          <WordSyllable word={data.word} syllable={data.syllable} />
          <Line />
        </View>
      ))}
    </View>
  );
};

export default LibraryDetails;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1
  },
  detail: {
    paddingBottom: 10
  },
  header: {
    ...Typography.normal,
    color: Colors.GREEN,
    fontWeight: "bold"
  }
});
