import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { RootStackParamList } from "../../../App";
import { droidSafeArea } from "../../styles";

export const WordScreen = ({
  navigation,
  route
}: {
  navigation: StackNavigationProp<RootStackParamList, "Word">;
  route: RouteProp<RootStackParamList, "Word">;
}) => {
  return (
    <SafeAreaView style={droidSafeArea}>
      <Text>Word</Text>
      <Text>Word is {route.params.word}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
    </SafeAreaView>
  );
};
