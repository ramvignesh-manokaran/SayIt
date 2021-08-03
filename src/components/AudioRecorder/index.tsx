import React, { FC, useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Vibration,
  StyleSheet
} from "react-native";
import { Audio } from "expo-av";
import { Colors, Typography } from "../../styles";

interface AudioRecorderProps {
  onStopRecording: (recordedURI: string | null) => void;
}

const AudioRecorder: FC<AudioRecorderProps> = ({ onStopRecording }) => {
  const [recording, setRecording] = useState<Audio.Recording>();
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    try {
      setIsRecording(true);
      Vibration.vibrate(100);
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true
      });
      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      setIsRecording(false);
      console.error("Failed to start recording", err);
    }
  };

  const stopRecording = async () => {
    console.log("Stopping recording..");
    setRecording(undefined);
    if (recording) {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      onStopRecording(uri);
      console.log("Recording stopped and stored at", uri);
    }
    setIsRecording(false);
  };

  return (
    <View style={styles.container}>
      {isRecording && (
        <Text style={styles.recordingText}>Recording in Progress...</Text>
      )}
      {!isRecording && (
        <Text style={styles.recordingText}>Press and hold while recording</Text>
      )}
      <TouchableWithoutFeedback
        onPressIn={startRecording}
        onPressOut={stopRecording}
      >
        <View
          style={[
            styles.iconContainer,
            isRecording
              ? styles.iconWhileRecording
              : styles.iconWhileNotRecording
          ]}
        >
          <Image
            style={styles.micLogo}
            source={
              isRecording
                ? require("../../assets/images/microphone-green.png")
                : require("../../assets/images/microphone-white.png")
            }
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AudioRecorder;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  recordingText: {
    ...Typography.normal,
    paddingBottom: 20
  },
  iconContainer: {
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 75
  },
  iconWhileNotRecording: {
    backgroundColor: Colors.GREEN
  },
  iconWhileRecording: {
    backgroundColor: Colors.LIGHT_GRAY
  },
  micLogo: {
    width: 30,
    height: 45
  }
});

// spiking

//const [speechText, setSpeechText] = useState<any>();

// const submitAudio = async () => {
//   if (recordedURI) {
//     try {
//       const { uri } = await FileSystem.getInfoAsync(recordedURI);

//       const formData = new FormData();
//       formData.append(
//         "file",
//         uri,
//         Platform.OS === "ios" ? `${Date.now()}.wav` : `${Date.now()}.m4a`
//       );

//       const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "multipart/form-data" },
//         body: formData
//       };

//       fetch("https://localhost:3005")
//         .then(response => response.text())
//         .then(text => setSpeechText(text))
//         .catch(function(error) {
//           console.log(
//             "There has been a problem with your fetch operation: " +
//               error.message
//           );
//           throw error;
//         });

//       // fetch("https://jsonplaceholder.typicode.com/posts", {
//       //   method: "POST",
//       //   body: JSON.stringify({
//       //     title: "foo",
//       //     body: "bar",
//       //     userId: 1
//       //   }),
//       //   headers: {
//       //     "Content-type": "application/json; charset=UTF-8"
//       //   }
//       // })
//       //   .then(response => response.text())
//       //   .then(text => setSpeechText(text));
//     } catch (error) {
//       console.log("There was an error reading file", error);
//     }
//   }
// };

/* 
<Button title="Submit Audio" onPress={submitAudio} />
      <Text>{speechText}</Text> */
