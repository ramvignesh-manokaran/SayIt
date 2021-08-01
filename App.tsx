import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import AudioRecorder from "./src/components/AudioRecorder";
import { styles } from "./src/styles/app";

const SayItApp = () => {
  return (
    <View style={styles.container}>
      <Text>Hello SayIt</Text>
      <StatusBar style="auto" />
      <AudioRecorder />
    </View>
  );
};

export default SayItApp;
