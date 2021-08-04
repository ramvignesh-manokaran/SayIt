import React, { FC, useRef, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, VideoProps } from "expo-av";
import { AVPlaybackSource } from "expo-av/build/AV";

export enum VideoPlayerShapes {
  CIRCLE = "circle",
  RECTANGLE = "rectangle"
}

interface VideoPlayerProps {
  source: AVPlaybackSource | undefined;
  videoProps?: VideoProps; 
}

const VideoPlayer: FC<VideoPlayerProps> = ({ source, videoProps }) => {
  const video = useRef<any>(null);
  const [status, setStatus] = useState<any>({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={source}
        shouldPlay
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        {...videoProps}
      />
      {/* <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View> */}
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    borderRadius: 75,
    flex: 1,
    marginBottom: 15
  },
  video: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 75
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
