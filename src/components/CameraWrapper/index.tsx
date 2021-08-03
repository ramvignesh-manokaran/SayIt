import { Camera } from "expo-camera";
import React, { FC, useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";

interface CameraProps {
  onCancel: () => void;
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
        <View style={styles.viewContainer}>
          <TouchableOpacity style={styles.cancelView} onPress={onCancel}>
            <Image
              style={styles.cancelLogo}
              source={require("../../assets/images/cancel.png")}
            />
          </TouchableOpacity>
        </View>
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
  },
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
