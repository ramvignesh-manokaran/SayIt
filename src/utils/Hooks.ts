import React, { useCallback } from "react";
import { StatusBar, StatusBarStyle } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Colors } from "../styles";

export const useStatusBar = (
  style: StatusBarStyle,
  bgColor = Colors.WHITE,
  animated = true
) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(style, animated);
      StatusBar.setBackgroundColor(bgColor);
    }, [])
  );
};
