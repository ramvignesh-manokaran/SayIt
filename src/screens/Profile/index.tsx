import React, { FC } from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";
import Line from "../../components/Line";
import WordSyllable from "../../components/WordSyllable";
import {
  wordSyllables,
  Conversation,
  AccountDetail,
  accountDetails
} from "../../constants/data";
import { Colors, droidSafeArea, Typography } from "../../styles";
import { useStatusBar } from "../../utils/Hooks";

const ProfileScreen: FC = () => {
  useStatusBar("dark-content");

  return (
    <SafeAreaView style={[droidSafeArea, styles.container]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/profile.png")}
        />
        <Text style={styles.name}>John Chai</Text>
      </View>
      <View style={styles.details}>
        {accountDetails.map((item: AccountDetail, index: number) => (
          <View key={index}>
            <WordSyllable
              word={item.setting}
              syllable={""}
              onPress={() => {}}
              showExpand
            />
            <Line />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  details: {
    flex: 1,
    padding: 15,
    paddingTop: 30
  },
  name: {
    ...Typography.header,
    fontWeight: "bold"
  },
  description: {
    ...Typography.normal
  }
});
