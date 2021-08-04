import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useState, useRef } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AVPlaybackStatus, Video } from "expo-av";

import { RootStackParamList } from "../../../App";
import { styles } from "../../styles/tutorial"
import ControlBar from "../../components/ControlBar";
import { Playback } from "expo-av/build/AV";
import CancelButton from "../../components/CancelButton";
import NextButton from "../../components/NextButton";


const TutorialScreen = ({navigation, route}: {
	navigation: StackNavigationProp<RootStackParamList, "Tutorial">,
	route: RouteProp<RootStackParamList, "Tutorial">
}) => {
	const tutorialVideo = require("../../assets/videos/TutorialApple.mp4");

	const windowWidth = useWindowDimensions().width;
	const videoObject = useRef<Playback>(null)
	
	const [videoHeight, setVideoHeight] = useState(300);
	const [fullVideoDuration, setFullVideoDuration] = useState(0);
	const [currVideoDuration, setCurrVideoDuration] = useState(0);
	const [videoIsSlowMo, setVideoIsSlowMo] = useState(false);

	const onSlowMo = async () => {
		await videoObject.current?.setRateAsync( !videoIsSlowMo ? 0.5 : 1, true);
		setVideoIsSlowMo(!videoIsSlowMo);
	}

	const calculateAspectRatio = (width: number, height: number) => {
		return height/width;
	}

	const onPlaybackUpdate = (playBackStatus: any) => {
		setCurrVideoDuration(playBackStatus.positionMillis);
		setFullVideoDuration(playBackStatus.durationMillis);
	}

	const onScrubStart = () => {
		videoObject.current?.pauseAsync();
	}

	const onScrubbing = (position: number) => {
		videoObject.current?.setPositionAsync(position);
	}

	const onScrubEnd = () => {
		videoObject.current?.playAsync();
	}

	const onCancel = () => {
		navigation.navigate("Word", { word: route.params.word });
	}
	
	const onNext = () => {
		videoObject.current?.stopAsync();
		navigation.navigate("Test", { word: route.params.word })
	};

	const onVideoStatusUpdate = (event: any) => {
		const { width, height } = event.naturalSize;
		setVideoHeight(windowWidth * calculateAspectRatio(width, height));
	};

	return (
	<SafeAreaView style={styles.safe}>
		<CancelButton onCancel={onCancel}/>
		<NextButton onNext={onNext}/>
		<View>
			
		</View>
		<View>
			<Video 
				source={tutorialVideo}
				ref={videoObject}
				resizeMode="cover"
				style={{ width: windowWidth, height: videoHeight }}
				onReadyForDisplay={onVideoStatusUpdate}
				onPlaybackStatusUpdate={onPlaybackUpdate}
				isLooping
				shouldPlay
				isMuted={false}
			/>
			<View style={styles.controlBarContainer}>
				<ControlBar 
					isSlowMo={videoIsSlowMo}
					currentVideoDuration={currVideoDuration}
					fullVideoDuration={fullVideoDuration}
					onSlowMoPress={onSlowMo}
					onScrubStart={onScrubStart}
					onScrubbing={onScrubbing}
					onScrubEnd={onScrubEnd}
				/>
			</View>
		</View>
	</SafeAreaView>
	)
}

export default TutorialScreen