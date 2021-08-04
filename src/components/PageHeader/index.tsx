import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Typography } from "../../styles";

interface PageHeaderProps {
  text: string;
}

const PageHeader: FC<PageHeaderProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 15,
    paddingLeft: 15
  },
  headerText: {
    ...Typography.header,
    fontWeight: "bold"
  }
});
