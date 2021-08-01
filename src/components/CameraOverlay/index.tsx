import { Video } from "expo-av";
import { Camera, CameraProps } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";

export const CameraOverlay = () => {
  const [hasPermission, setHashPermission] = useState(false);
  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHashPermission(status === "granted");
    };

    getPermission();
  });

  if (hasPermission) {
    return (
      <View
        style={{
          height: 150,
          width: 150,
          borderRadius: 75,
          overflow: "hidden",
        }}
      >
        <Camera
          style={{ flex: 1, overflow: "hidden" }}
          type={Camera.Constants.Type.front}
          ratio={"1:1"}
          useCamera2Api={true}
        ></Camera>
      </View>
    );
  }

  return (
    <View>
      <Text>No Camera yet</Text>
    </View>
  );
};
