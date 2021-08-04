import React, { FC } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Colors } from "../../styles";

interface LineProps {
  style?: StyleProp<ViewStyle>;
}

const Line: FC<LineProps> = ({ style }) => {
  return <View style={[styles.container, style]} />;
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
