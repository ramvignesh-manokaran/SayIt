import React, { FC } from "react";
import { ImageSourcePropType, StyleSheet, View, Text } from "react-native";
import { Typography, Colors } from "../../styles";
import Button, { ButtonType } from "../Button";
import ImageLink from "../ImageLink";
import List from "../List";

interface ButtonListItem {
  text: string;
  onPress: () => void;
}

interface ImageTextComboProps {
  imgSource: ImageSourcePropType;
  onImageClick?: () => void;
  header: string;
  listData: string[];
  buttonList: ButtonListItem[];
}

const ImageTextCombo: FC<ImageTextComboProps> = ({
  imgSource,
  onImageClick,
  listData,
  buttonList,
  header
}) => {
  return (
    <View style={styles.container}>
      <ImageLink
        imgSource={imgSource}
        onPress={onImageClick}
        touchableStyles={styles.imageTouchableStyles}
        imageStyles={styles.imageStyles}
      />
      <View style={styles.textContainer}>
        <Text style={styles.header}>{header}</Text>
        <List data={listData} />
      </View>
      <View style={styles.buttonsContainer}>
        {buttonList.map((button: ButtonListItem, index: number) => (
          <Button
            key={index}
            text={button.text}
            type={ButtonType.PRIMARY}
            onPress={button.onPress}
            buttonStyle={styles.buttonStyle}
          />
        ))}
      </View>
      <View style={styles.lineView} />
    </View>
  );
};

export default ImageTextCombo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  imageTouchableStyles: {
    flex: 1
  },
  imageStyles: {
    height: 160,
    width: "100%"
  },
  textContainer: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50
  },
  header: {
    ...Typography.normal,
    fontWeight: "bold",
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingLeft: 50,
    paddingRight: 50
  },
  buttonStyle: {
    width: 100,
    marginRight: 10
  },
  lineView: {
    borderBottomColor: Colors.LIGHT_GRAY,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  }
});