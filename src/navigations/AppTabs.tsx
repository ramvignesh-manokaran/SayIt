import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { HomeScreen } from "../screens/Home";
import { SearchScreen } from "../screens/Search";
import WordLibraryScreen from "../screens/WordLibrary";
import WordDetailsScreen from "../screens/WordDetails";
import { Colors } from "../styles";

const Tab = createBottomTabNavigator();
export const AppTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "white" }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.GREEN
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            ></MaterialCommunityIcons>
          )
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name="view-grid"
            />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="SavedWords"
        component={WordLibraryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} size={size} name="bookmark" />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} size={size} name="account" />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ tabBarButton: () => null }}
      ></Tab.Screen>
      <Tab.Screen
        name="WordDetails"
        component={WordDetailsScreen}
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

const ProfileScreen = () => (
  <SafeAreaView>
    <Text>ProfileScreen</Text>
  </SafeAreaView>
);
