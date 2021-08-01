import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { RootStackParamList } from "../../../App";

export const WordScreen = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Word">;
  route: RouteProp<RootStackParamList, "Word">;
}) => {
  return (
    <SafeAreaView>
      <Text>Word</Text>
      <Text>Word is {route.params.word}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
    </SafeAreaView>
  );
};
