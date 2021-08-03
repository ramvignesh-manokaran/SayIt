import { Camera } from "expo-camera";
import React, { FC, useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import CancelButton from "../CancelButton";

interface CameraProps {
  onCancel?: () => void;
}

const CameraWrapper: FC<CameraProps> = ({ onCancel }) => {
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
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.front}
        ratio={"1:1"}
        useCamera2Api={true}
      >
        {onCancel && <CancelButton onCancel={onCancel} />}
      </Camera>
    );
  }

  return <Text>No Camera yet</Text>;
};

export default CameraWrapper;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    overflow: "hidden"
  }
});
