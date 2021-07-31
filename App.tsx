import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./src/screens/home";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const SayItApp = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "white" },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default SayItApp;
