import * as Typography from "./typography";
import * as Colors from "./colors";
import { Platform } from "react-native";

export const droidSafeArea = {
  flex: 1,
  paddingTop: Platform.OS === "android" ? 25 : 0
};

export { Typography, Colors };
