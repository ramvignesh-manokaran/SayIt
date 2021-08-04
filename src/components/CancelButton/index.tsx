import React, { FC } from "react";
import { TouchableOpacity, View, StyleSheet, Image, Pressable } from "react-native";

interface CancelButtonProps {
  onCancel?: () => void;
}

const CancelButton: FC<CancelButtonProps> = ({ onCancel }) => {
  return (
    <View style={styles.viewContainer}>
      <Pressable style={styles.cancelView} onPress={onCancel}>
        <Image
          style={styles.cancelLogo}
          source={require("../../assets/images/cancel.png")}
        />
      </Pressable>
    </View>
  );
};

export default CancelButton;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  cancelView: {
    position: "absolute",
    top: 75,
    left: 30,
    zIndex: 10,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  cancelLogo: {
    width: 32,
    height: 32,
  }
});
