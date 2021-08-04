import React, { FC } from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";
import { Colors, droidSafeArea, Typography } from "../../styles";
import { useStatusBar } from "../../utils/Hooks";

const ProfileScreen: FC = () => {
  useStatusBar("light-content");

  return (
    <SafeAreaView style={[droidSafeArea, styles.container]}>
      <View style={styles.Header}>
        <Text style={styles.normal}>Settings</Text>
        <Text style={styles.header}>Profile</Text>
        <Text style={styles.normal}>Logout</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/profile.png")}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>Victoria Robertson</Text>
        <Text style={styles.description}>A mantra goes here</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GREEN
  },
  Header: {
    padding: 15,
    paddingTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 220
  },
  normal: {
    ...Typography.normal,
    color: Colors.WHITE
  },
  header: {
    ...Typography.header,
    color: Colors.WHITE,
    fontWeight: "bold"
  },
  imageContainer: {
    height: 200,
    width: 200,
    borderRadius: 100,
    position: "absolute",
    top: 120,
    left: "50%",
    elevation: 10
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    left: "-50%",
    position: "absolute"
  },
  details: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop: 80,
    alignItems: "center"
  },
  name: {
    ...Typography.header,
    fontWeight: "bold"
  },
  description: {
    ...Typography.normal
  }
});
