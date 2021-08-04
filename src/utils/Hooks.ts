import React, { useCallback } from "react";
import { StatusBar, StatusBarStyle } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export const useStatusBar = (style: StatusBarStyle, animated = true) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(style, animated);
    }, [])
  );
};
