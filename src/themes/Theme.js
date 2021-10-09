import { DefaultTheme, configureFonts } from "react-native-paper";
import fontConfig from "../assets/fonts/Fonts";
//https://coolors.co/f43737

const Theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 30,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F43737",
    accent: "red",
  },
};
export default Theme;