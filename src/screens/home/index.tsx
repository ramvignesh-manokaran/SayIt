import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraOverlay } from "../../components/CameraOverlay";
import { styles } from "../../styles/app";

export const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexGrow: 1,
      }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, flex: 1 }}>
        <View style={styles.container}>
          <Text>Hello SayIt Flex</Text>
          <StatusBar style="auto" />
          <CameraOverlay></CameraOverlay>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
