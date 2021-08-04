import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "../Home";
import { Text } from "react-native";
import React from "react";
import { WordScreen } from "../Word";
import { SearchScreen } from "../Search";

const Tab = createBottomTabNavigator();
export const MainTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{}}></Tab.Screen>
      <Tab.Screen name="Category" component={CategoryScreen}></Tab.Screen>
      <Tab.Screen name="SavedWords" component={SavedWordsScreen}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ tabBarButton: () => null }}
      ></Tab.Screen>
      <Tab.Screen
        name="Word"
        component={WordScreen}
        options={{ tabBarButton: () => null }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const CategoryScreen = () => (
  <SafeAreaView>
    <Text>CategoryScreen</Text>
  </SafeAreaView>
);

const SavedWordsScreen = () => (
  <SafeAreaView>
    <Text>SavedWordsScreen</Text>
  </SafeAreaView>
);

const ProfileScreen = () => (
  <SafeAreaView>
    <Text>ProfileScreen</Text>
  </SafeAreaView>
);
