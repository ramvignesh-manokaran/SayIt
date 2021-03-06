import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../styles";
import ImageLink from "../ImageLink";

interface CancelButtonProps {
  onCancel?: () => void;
}

const CancelButton: FC<CancelButtonProps> = ({ onCancel }) => {
  return (
    <ImageLink
      imgSource={require("../../assets/images/cancel.png")}
      onPress={onCancel}
      touchableStyles={styles.cancelView}
      imageStyles={styles.cancelLogo}
    />
  );
};

export default CancelButton;

const styles = StyleSheet.create({
  cancelView: {
    position: "absolute",
    top: 75,
    left: 30,
    zIndex: 10,
    borderRadius: 16,
    backgroundColor: Colors.WHITE
  },
  cancelLogo: {
    width: 32,
    height: 32
  }
});
