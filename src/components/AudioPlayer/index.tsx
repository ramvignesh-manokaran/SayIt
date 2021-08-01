import React, { FC } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Text
} from "react-native";
import { Audio } from "expo-av";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  playText: {
    paddingBottom: 50
  },
  tinyLogo: {
    width: 50,
    height: 50
  }
});

interface AudioPlayerProps {
  recordedURI: string | null;
}

const AudioPlayer: FC<AudioPlayerProps> = ({ recordedURI }) => {
  const playAudio = async () => {
    if (recordedURI) {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: recordedURI
      };
      await playbackInstance.loadAsync(source);
      playbackInstance.playAsync();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.playText}>
        Click below icon to play recorded audio
      </Text>
      <TouchableWithoutFeedback onPressIn={playAudio}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/images/speaker.png")}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AudioPlayer;
