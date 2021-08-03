import React, { FC } from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";

interface CancelButtonProps {
  onCancel?: () => void;
}

const CancelButton: FC<CancelButtonProps> = ({ onCancel }) => {
  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity style={styles.cancelView} onPress={onCancel}>
        <Image
          style={styles.cancelLogo}
          source={require("../../assets/images/cancel.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CancelButton;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  cancelView: {
    position: "absolute",
    top: 75,
    left: 30,
    elevation: 10
  },
  cancelLogo: {
    width: 32,
    height: 32
  }
});
