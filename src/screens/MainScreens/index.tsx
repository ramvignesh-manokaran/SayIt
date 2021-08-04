import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "../home";
import { Text } from "react-native";
import React from "react";
import { SearchScreen } from "../Search";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../styles";
import WordLibraryScreen from "../word-library";
import WordDetailsScreen from "../word-details";

const Tab = createBottomTabNavigator();
export const MainTabs = () => {
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
            <MaterialCommunityIcons color={color} size={size} name="home" />
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
