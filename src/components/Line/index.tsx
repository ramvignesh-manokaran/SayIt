import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../styles";

const Line: FC = () => {
  return <View style={styles.container} />;
};

export default Line;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.LIGHT_GRAY,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  }
});
