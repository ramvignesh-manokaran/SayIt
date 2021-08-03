import React from "react";
import { View, Text } from "react-native";
import CameraWrapper from "../CameraWrapper";

export const CameraOverlay = () => {
  return (
    <View
      style={{
        height: 150,
        width: 150,
        borderRadius: 75,
        overflow: "hidden"
      }}
    >
      <CameraWrapper />
    </View>
  );
};
