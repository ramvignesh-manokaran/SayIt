import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../../App";
import { CameraOverlay } from "../../components/CameraOverlay";
import { styles } from "../../styles/app";

export const HomeScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}) => {
  const wordList = ["Apple", "Book", "Water"];
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (query) {
      setSuggestions(
        wordList.filter((word) =>
          word.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const renderSuggestion = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Word", { word: item })}
        style={{
          height: 36,
          width: "100%",
          paddingHorizontal: 18,
          borderTopColor: "#ddd",
          borderTopWidth: 1,
          backgroundColor: "#eee",
          justifyContent: "center",
        }}
      >
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexGrow: 1,
      }}
    >
      <View style={styles.container}>
        <Text>Hello SayIt Flex</Text>
        <View style={{ width: "100%", zIndex: 10 }}>
          <TextInput
            style={{
              paddingHorizontal: 18,
              flexDirection: "row",
              backgroundColor: "#eee",
              height: 36,
              width: "100%",
              borderRadius: 18,
              zIndex: 10,
            }}
            onChangeText={setQuery}
            value={query}
          ></TextInput>
          {suggestions.length > 0 && (
            <FlatList
              style={{
                zIndex: 7,
                position: "absolute",
                width: "100%",
                paddingTop: 36,
                backgroundColor: "#eee",
                borderRadius: 18,
              }}
              contentContainerStyle={{ overflow: "hidden" }}
              data={suggestions}
              renderItem={renderSuggestion}
              keyExtractor={(x, i) => i.toString()}
            ></FlatList>
          )}
        </View>
        <CameraOverlay></CameraOverlay>
      </View>
    </SafeAreaView>
  );
};
