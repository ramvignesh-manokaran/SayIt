import React, { useState } from "react";
import { Button, View, StyleSheet, Platform, Text } from "react-native";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import axios from "axios";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8
  }
});

const AudioRecorder = () => {
  const [recording, setRecording] = useState<Audio.Recording>();
  const [recordedURI, setRecordedURI] = useState<string | null>();
  const [speechText, setSpeechText] = useState<any>();

  const startRecording = async () => {
    try {
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
      console.error("Failed to start recording", err);
    }
  };

  const stopRecording = async () => {
    console.log("Stopping recording..");
    setRecording(undefined);
    if (recording) {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecordedURI(uri);
      console.log("Recording stopped and stored at", uri);
    }
  };

  const playSound = async () => {
    if (recordedURI) {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: recordedURI
      };
      await playbackInstance.loadAsync(source);
      playbackInstance.playAsync();
    }
  };

  const submitAudio = async () => {
    if (recordedURI) {
      try {
        const { uri } = await FileSystem.getInfoAsync(recordedURI);

        const formData = new FormData();
        formData.append(
          "file",
          uri,
          Platform.OS === "ios" ? `${Date.now()}.wav` : `${Date.now()}.m4a`
        );

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "multipart/form-data" },
          body: formData
        };

        fetch("https://localhost:3005")
          .then(response => response.text())
          .then(text => setSpeechText(text))
          .catch(function(error) {
            console.log(
              "There has been a problem with your fetch operation: " +
                error.message
            );
            throw error;
          });

        // fetch("https://jsonplaceholder.typicode.com/posts", {
        //   method: "POST",
        //   body: JSON.stringify({
        //     title: "foo",
        //     body: "bar",
        //     userId: 1
        //   }),
        //   headers: {
        //     "Content-type": "application/json; charset=UTF-8"
        //   }
        // })
        //   .then(response => response.text())
        //   .then(text => setSpeechText(text));
      } catch (error) {
        console.log("There was an error reading file", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Submit Audio" onPress={submitAudio} />
      <Text>{speechText}</Text>
    </View>
  );
};

export default AudioRecorder;
