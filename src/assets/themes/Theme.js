import { DefaultTheme, configureFonts } from "react-native-paper";
import fontConfig from "../fonts/Fonts";
import colors from "../colors/Colors";
//https://coolors.co/f43737

const Theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 20,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: "red",
  },
};
export default Theme;
