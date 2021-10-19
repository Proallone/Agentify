import { DefaultTheme, configureFonts } from "react-native-paper";
import fontConfig from "../assets/fonts/Fonts";
import colors from "../assets/colors/Colors";
//https://coolors.co/f43737

const Theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 30,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: "red",
  },
};
export default Theme;
