import React, { FC } from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { Colors, Typography } from "../../styles";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary"
}

export interface ButtonProps {
  text: string;
  type: ButtonType;
  onPress?: () => void;
}

const Button: FC<ButtonProps> = ({ text, type, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress ? onPress : () => {}}>
        <View
          style={[
            styles.root,
            type === ButtonType.PRIMARY ? styles.primary : styles.secondary
          ]}
        >
          <Text
            style={[
              styles.root,
              type === ButtonType.PRIMARY
                ? styles.primaryText
                : styles.secondaryText
            ]}
          >
            {text}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  root: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    ...Typography.normal
  },
  primary: {
    backgroundColor: Colors.GREEN
  },
  secondary: {
    backgroundColor: Colors.WHITE
  },
  primaryText: {
    color: Colors.WHITE
  },
  secondaryText: {
    color: Colors.GREEN,
    fontWeight: "600"
  }
});
