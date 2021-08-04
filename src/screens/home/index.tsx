import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Keyboard } from "react-native";
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../../App";
import { styles } from "../../styles/app";

export const HomeScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}) => (
  <SafeAreaView
    style={{
      flex: 1,
      flexGrow: 1,
    }}
  >
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={{ width: "100%" }}
        onPressIn={() => navigation.navigate("Search")}
      >
        <View>
          <TextInput
            pointerEvents="none"
            editable={false}
            placeholder={"Search word (e.g. Book)"}
            style={{
              paddingHorizontal: 25,
              flexDirection: "row",
              backgroundColor: "#eee",
              height: 50,
              width: "100%",
              borderRadius: 25,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  </SafeAreaView>
);
