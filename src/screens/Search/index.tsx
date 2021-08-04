import React, { createRef, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";
import { styles } from "../../styles/app";
import { Colors, droidSafeArea, Typography } from "../../styles";
import { wordList, WordType } from "../../assets/words/wordList";

export const SearchScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Search">;
}) => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<WordType[]>([]);
  let textInputRef = createRef<TextInput>();

  useEffect(() => {
    if (query) {
      setSuggestions(
        wordList.filter((word: WordType) =>
          word.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  }, [query]);

  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  });

  const renderSuggestion = ({ item }: { item: WordType }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("WordDetails", { word: item.name })}
        style={{
          height: 50,
          width: "100%",
          paddingHorizontal: 25,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={[Typography.normal]}>{item.name} </Text>
        <Text style={[Typography.normal, { color: Colors.GRAY }]}>
          {item.phonics}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={[styles.container, droidSafeArea]}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle={"dark-content"} />
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>Search</Text>
      </View>
      <View>
        <TextInput
          ref={textInputRef}
          autoFocus
          placeholder={"Search word (e.g. Book)"}
          style={{
            paddingHorizontal: 25,
            flexDirection: "row",
            backgroundColor: "#eee",
            height: 50,
            width: "100%",
            borderRadius: 25,
            marginBottom: 20,
            zIndex: 10,
          }}
          onChangeText={setQuery}
        ></TextInput>
        <FlatList
          style={{
            width: "100%",
          }}
          contentContainerStyle={{ overflow: "hidden" }}
          data={suggestions}
          renderItem={renderSuggestion}
          keyExtractor={(x, i) => i.toString()}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};
