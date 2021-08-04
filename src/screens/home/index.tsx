import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/app";
import { Colors, droidSafeArea, Typography } from "../../styles";
import { RootStackParamList } from "../../../App";
import { wordList, WordType } from "../../assets/words/wordList";

export const HomeScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}) => {
  const recentSearch: WordType[] = wordList.slice(0, 3);
  const renderRecentSearch = ({ item }: { item: WordType }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("WordDetails", { word: item.name })}
        style={{
          height: 50,
          width: "100%",
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={[Typography.normal, { fontWeight: "bold", paddingRight: 5 }]}
        >
          {item.name}
        </Text>
        <Text style={[Typography.normal, { color: Colors.GRAY }]}>
          {item.phonics}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={[
        droidSafeArea,
        {
          flex: 1,
          flexGrow: 1,
        },
      ]}
    >
      <StatusBar
        backgroundColor={Colors.WHITE}
        barStyle={"dark-content"}
      ></StatusBar>
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>
            Hello <Text style={{ color: Colors.GREEN }}>Fala!</Text>
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Category")}
        >
          <View
            style={{
              height: 200,
              width: "100%",
              borderRadius: 20,
              backgroundColor: Colors.ORANGE,
              marginBottom: 20,
              flexDirection: "row",
            }}
          >
            <Image
              style={{
                height: 180,
                width: 150,
                marginLeft: 10,
                marginTop: "auto",
              }}
              source={require("../../assets/images/phone.png")}
            ></Image>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 30,
                  fontWeight: "700",
                  lineHeight: 32,
                }}
              >
                Daily Practice
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  marginBottom: 16,
                  fontWeight: "600",
                }}
              >
                5 words a day
              </Text>
              <TouchableWithoutFeedback>
                <View
                  style={{
                    height: 48,
                    backgroundColor: Colors.GREEN,
                    borderRadius: 24,
                    paddingHorizontal: 24,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Start Now
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={{ width: "100%", marginBottom: 16 }}
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
        <View>
          <Text style={{ fontSize: 28, fontWeight: "600" }}>Recent search</Text>
          <FlatList
            renderItem={renderRecentSearch}
            data={recentSearch}
            keyExtractor={(x, i) => i.toString()}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};
