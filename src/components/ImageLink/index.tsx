import React, { FC } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType
} from "react-native";

interface ImageLinkProps {
  imgSource: ImageSourcePropType;
  onPress?: () => void;
  touchableStyles: any;
  imageStyles: any;
}

const ImageLink: FC<ImageLinkProps> = ({
  imgSource,
  onPress,
  touchableStyles,
  imageStyles
}) => {
  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity
        style={touchableStyles}
        onPress={onPress ? onPress : () => {}}
      >
        <Image style={imageStyles} source={imgSource} />
      </TouchableOpacity>
    </View>
  );
};

export default ImageLink;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1
  }
});
