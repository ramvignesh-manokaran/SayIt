import React, { FC } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView
} from "react-native";
import { RootStackParamList } from "../../../App";
import { Colors, droidSafeArea, Typography } from "../../styles";
import ImageLink from "../../components/ImageLink";
import ImageTextCombo from "../../components/ImageTextCombo";
import { RouteProp } from "@react-navigation/native";

interface WordDetailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "WordDetails">;
  route: RouteProp<RootStackParamList, "WordDetails">;
}

const sylableAppData: string[] = ["2 letter Ps but just one P sound"];
const sylableLeData: string[] = [
  "The second syllable is unstressed",
  "Only a dark L can be heard"
];

const WordDetailsScreen: FC<WordDetailsScreenProps> = ({
  navigation,
  route
}) => {
  const handleSignLangClick = () => {
    // @todo navigate to sign language video
  };

  // @todo navigate to video page instead of test page
  const handleLinkClick = () => {
    navigation.navigate("Test", { word: route.params.word });
  };

  return (
    <SafeAreaView style={[droidSafeArea, styles.container]}>
      <StatusBar backgroundColor={Colors.GREEN} barStyle={"light-content"} />
      <ScrollView>
        <View style={styles.textAndSignView}>
          <View style={styles.textView}>
            <Text style={styles.detailsText}>Apple</Text>
            <Text style={styles.detailsText}>{`a.pl /ˈæp.əl/`}</Text>
          </View>
          <ImageLink
            imgSource={require("../../assets/images/sign-language-link.png")}
            onPress={handleSignLangClick}
            touchableStyles={styles.signLangView}
            imageStyles={styles.signLogo}
          />
        </View>
        <View style={styles.videoLinkView}>
          <ImageLink
            imgSource={require("../../assets/images/word-details-video-link.png")}
            onPress={handleLinkClick}
            touchableStyles={styles.videoLinkTouchable}
            imageStyles={styles.videoLinkImage}
          />
        </View>

        <ImageTextCombo
          imgSource={require("../../assets/images/apple-sylable-app-link.png")}
          onImageClick={handleLinkClick}
          header={"/æp/"}
          listData={sylableAppData}
          buttonList={[
            { text: "/æ/", onPress: handleLinkClick },
            { text: "/p/", onPress: handleLinkClick }
          ]}
        />
        <ImageTextCombo
          imgSource={require("../../assets/images/apple-sylable-app-link.png")}
          onImageClick={handleLinkClick}
          header={"/l̩/"}
          listData={sylableLeData}
          buttonList={[{ text: "/l̩/", onPress: handleLinkClick }]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WordDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 0
  },
  statusBarStyle: {
    color: Colors.WHITE
  },
  textAndSignView: {
    padding: 15,
    backgroundColor: Colors.GREEN,
    flexDirection: "row",
    height: 120
  },
  detailsText: {
    ...Typography.header,
    color: Colors.WHITE,
    fontWeight: "bold"
  },
  textView: {
    flex: 2
  },
  signLangView: {
    flex: 1
  },
  signLogo: {
    width: 100,
    height: 100
  },
  videoLinkView: {
    padding: 15,
    backgroundColor: Colors.GREEN,
    height: 230,
    width: "100%"
  },
  videoLinkTouchable: {
    flex: 1
  },
  videoLinkImage: {
    height: 200,
    width: "100%"
  }
});
