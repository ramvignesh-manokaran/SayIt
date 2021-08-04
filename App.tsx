import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TestScreen } from "./src/screens/Test";
import { MainTabs } from "./src/screens/MainScreens";
import TutorialScreen from "./src/screens/Tutorial";
import WordDetailsScreen from "./src/screens/WordDetails";

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
  WordLibrary: undefined;
  Tutorial: { word: string };
};

const SayItApp = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="WordLibrary"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "white" }
          }}
        >
          <Stack.Screen name="Main" component={MainTabs} />
          <Stack.Screen name="WordDetails" component={WordDetailsScreen} />
          <Stack.Screen name="Tutorial" component={TutorialScreen} />
          <Stack.Screen name="Test" component={TestScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default SayItApp;
