import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { TabRouter } from "react-navigation";
import { RootStackParamList } from "../../../App";
import AudioRecorder from "../../components/AudioRecorder";
import BottomDrawer from "../../components/BottomDrawer";
import CameraWrapper from "../../components/CameraWrapper";
import VideoPlayer from "../../components/VideoPlayer";
import { droidSafeArea } from "../../styles";

interface TestScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Test">;
  route: RouteProp<RootStackParamList, "Test">;
}

export const TestScreen: FC<TestScreenProps> = ({ navigation, route }) => {
  const [recorderUri, setRecorderUri] = useState<string | null>("");
  const [showAudioSubmitDrawer, setShowAudioSubmitDrawer] = useState(false);
  const [showSubmitSuccessDrawer, setShowSubmitSuccessDrawer] = useState(false);

  const stopRecording = (recordedURI: string | null) => {
    setRecorderUri(recordedURI);
    setShowAudioSubmitDrawer(true);
  };

  const handleSubmitAudio = () => {
    setShowAudioSubmitDrawer(false);
    setShowSubmitSuccessDrawer(true);
  };

  const handleSubmitCancel = () => {
    setShowAudioSubmitDrawer(false);
  };

  const handleSubmitDrawerClose = () => {
    setShowAudioSubmitDrawer(false);
  };

  const handleSuccess = () => {
    setShowAudioSubmitDrawer(false);
    navigation.navigate("Home");
  };

  const handleCameraCancel = () => {
    navigation.navigate("Tutorial", { word: route.params.word });
  };

  return (
    <SafeAreaView style={droidSafeArea}>
      <View style={styles.cameraView}>
        <CameraWrapper onCancel={handleCameraCancel} />
      </View>
      <View style={styles.videoView}>
        <VideoPlayer
          source={require("../../assets/videos/TutorialApple.mp4")}
        />
      </View>
      <View style={styles.recorderVaiew}>
        <AudioRecorder onStopRecording={stopRecording} />
      </View>
      <BottomDrawer
        showDrawer={showAudioSubmitDrawer}
        header={"Pronunciation Checker"}
        description={"Would you like to check your pronounciation?"}
        onClose={handleSubmitDrawerClose}
        primaryButton={{ text: "Ok, I'm Ready!", onPress: handleSubmitAudio }}
        secondaryButton={{ text: "Try Again", onPress: handleSubmitCancel }}
      />
      <BottomDrawer
        showDrawer={showSubmitSuccessDrawer}
        header={"Excellent!"}
        description={"Your progress will be stored in your Word Library."}
        onClose={handleSubmitDrawerClose}
        primaryButton={{ text: "Continue", onPress: handleSuccess }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cameraView: {
    flex: 2
  },
  recorderVaiew: {
    flex: 1
  },
  videoView: {
    position: "absolute",
    top: 75,
    right: 35,
    elevation: 10
  }
});
