import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TestScreen } from "./src/screens/test";
import { MainTabs } from "./src/screens/MainScreens";

const Stack = createStackNavigator();

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  Category: undefined;
  SavedWords: undefined;
  Profile: undefined;
  Search: undefined;
  Word: { word: string };
  Test: { word: string };
  WordDetails: { word: string };
};

const SayItApp = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "white" },
          }}
        >
          <Stack.Screen name="Main" component={MainTabs}></Stack.Screen>
          <Stack.Screen name="Test" component={TestScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default SayItApp;
