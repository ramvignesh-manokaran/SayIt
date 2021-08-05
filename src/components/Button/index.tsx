import React, { FC } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  StyleProp,
  ViewStyle
} from "react-native";
import { Colors, Typography } from "../../styles";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary"
}

export enum ButtonSize {
  SMALL = "small",
  LARGE = "large"
}

export interface ButtonProps {
  text: string;
  type: ButtonType;
  size: ButtonSize;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
}

const Button: FC<ButtonProps> = ({
  text,
  type,
  onPress,
  buttonStyle,
  size
}) => {
  return (
    <View style={buttonStyle ? buttonStyle : styles.container}>
      <TouchableHighlight onPress={onPress ? onPress : () => {}}>
        <View
          style={[
            styles.root,
            type === ButtonType.PRIMARY ? styles.primary : styles.secondary,
            size === ButtonSize.SMALL ? styles.small : styles.large
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
    flex: 1
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
  small: {
    height: 40,
    width: 75
  },
  large: {
    height: 50
  },
  primaryText: {
    color: Colors.WHITE
  },
  secondaryText: {
    color: Colors.GREEN,
    fontWeight: "600"
  }
});
