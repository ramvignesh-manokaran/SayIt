import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, TextInput, Text, Image, StatusBar } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/app";
import { Colors, droidSafeArea, Typography } from "../../styles";
import { RootStackParamList } from "../../../App";

export const HomeScreen = ({
  navigation
}: {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}) => (
  <SafeAreaView
    style={[
      droidSafeArea,
      {
        flex: 1,
        flexGrow: 1
      }
    ]}
  >
    <StatusBar backgroundColor={Colors.WHITE} barStyle={"dark-content"} />
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>
          Welcome <Text style={{ color: Colors.GREEN }}>Fala</Text>
        </Text>
      </View>
      <View
        style={{
          height: 200,
          width: "100%",
          borderRadius: 20,
          backgroundColor: Colors.ORANGE,
          marginBottom: 20,
          flexDirection: "row"
        }}
      >
        <View style={{ marginTop: "auto" }}>
          <Image source={require("../../assets/images/phone.png")}></Image>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={{ color: "white" }}>Daily Practice</Text>
        </View>
      </View>
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
              borderRadius: 25
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  </SafeAreaView>
);
