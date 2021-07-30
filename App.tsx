import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { CameraOverlay } from "./src/components/CameraOverlay";
import { styles } from "./src/styles/app";

const SayItApp = () => {
  return (
    <View style={styles.container}>
      <Text>Hello SayIt</Text>
      <StatusBar style="auto" />
      <CameraOverlay></CameraOverlay>
    </View>
  );
};

export default SayItApp;
