import React, { FC } from "react";
import { TouchableOpacity, View, StyleSheet, Image, Pressable } from "react-native";

interface NextButtonProps {
  onNext?: () => void;
}

const NextButton: FC<NextButtonProps> = ({ onNext }) => {
  return (
    <View style={styles.viewContainer}>
      <Pressable style={styles.nextView} onPress={onNext}>
        <Image
          style={styles.nextLogo}
          source={require("../../assets/images/next.png")}
        />
      </Pressable>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  nextView: {
    position: "absolute",
    top: 65,
    right: 30,
    zIndex: 10,
    borderRadius: 25,
    backgroundColor: "#5DB075",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  nextLogo: {
    width: 15,
    height: 25,
  }
});
