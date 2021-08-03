import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./src/screens/home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { WordScreen } from "./src/screens/word";
import { TestScreen } from "./src/screens/test";

const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Word: { word: string };
  Test: { word: string };
};

const SayItApp = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "white" }
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="Word" component={WordScreen}></Stack.Screen>
          <Stack.Screen name="Test" component={TestScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default SayItApp;
