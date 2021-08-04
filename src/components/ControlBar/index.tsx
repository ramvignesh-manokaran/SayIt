import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";
import { color } from "react-native-reanimated";
import Scrubber from "react-native-scrubber";

import { styles } from "./styles";

interface Props  {
	isSlowMo: boolean;
	currentVideoDuration: number;
	fullVideoDuration: number;
	onSlowMoPress: () => void;
	onScrubStart: () => void;
	onScrubbing: (position: number) => void;
	onScrubEnd: () => void;
}

const ControlBar: FC<Props> = ({
	isSlowMo, 
	currentVideoDuration,
	fullVideoDuration, 
	onSlowMoPress,
	onScrubStart,
	onScrubbing,
	onScrubEnd
}) => {

	return ( 
		<View style={styles.controlBar}>
			<View style={styles.scrubber}>
				<Scrubber 
					value={currentVideoDuration}
					totalDuration={fullVideoDuration}
					onSlide={onScrubbing}
					onSlidingComplete={onScrubEnd}
					onSlidingStart={onScrubStart}
					displayValues={false}
				/>
			</View>
			<View>
				<Pressable 
					onPress={onSlowMoPress} 
					style={[
						styles.slowMoButton, 
						{backgroundColor: isSlowMo ? "#5DB075" : "#fff"}
						]}
				>
					<Text style={{color: isSlowMo ? "#fff" : "#000"}}>
						0.5x
					</Text>
				</Pressable>
			</View>
	</View>
	)
}

export default ControlBar;	