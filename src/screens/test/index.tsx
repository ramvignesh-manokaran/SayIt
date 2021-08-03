import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { RootStackParamList } from "../../../App";
import AudioRecorder from "../../components/AudioRecorder";
import BottomDrawer from "../../components/BottomDrawer";
import CameraWrapper from "../../components/CameraWrapper";
import { droidSafeArea } from "../../styles";

interface TestScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Test">;
}

export const TestScreen: FC<TestScreenProps> = ({ navigation }) => {
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
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={droidSafeArea}>
      <View style={styles.cameraView}>
        <CameraWrapper onCancel={handleCameraCancel} />
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
  }
});
