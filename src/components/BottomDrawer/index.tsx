import React, { FC, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { BottomSheet } from "react-native-btr";
import { Typography, Colors } from "../../styles";
import Button, { ButtonProps, ButtonType } from "../Button";

interface BottomDrawerProps {
  showDrawer: boolean;
  header: string;
  description: string;
  onClose: () => void;
  primaryButton: Pick<ButtonProps, "text" | "onPress">;
  secondaryButton?: Pick<ButtonProps, "text" | "onPress">;
}

const BottomDrawer: FC<BottomDrawerProps> = ({
  showDrawer,
  header,
  description,
  onClose,
  primaryButton,
  secondaryButton
}) => {
  return (
    <BottomSheet
      visible={showDrawer}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
    >
      <View style={styles.bottomNavigationView}>
        <View style={styles.innerView}>
          <Text style={styles.header}>{header}</Text>
          <Text style={styles.description}>{description}</Text>
          <Button
            text={primaryButton.text}
            type={ButtonType.PRIMARY}
            onPress={primaryButton.onPress}
          />
          {secondaryButton && (
            <Button
              text={secondaryButton.text}
              type={ButtonType.SECONDARY}
              onPress={secondaryButton.onPress}
            />
          )}
        </View>
      </View>
    </BottomSheet>
  );
};

export default BottomDrawer;

const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: Colors.WHITE,
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 44,
    paddingBottom: 24,
    paddingRight: 24,
    paddingLeft: 24
  },
  innerView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  header: {
    ...Typography.header,
    paddingBottom: 10,
    textAlign: "center"
  },
  description: {
    ...Typography.normal,
    paddingBottom: 10,
    paddingRight: 24,
    paddingLeft: 24,
    textAlign: "center",
    color: Colors.GRAY
  }
});
