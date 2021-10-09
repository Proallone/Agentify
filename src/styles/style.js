//https://stackoverflow.com/questions/30853178/react-native-global-styles

//"use strict";
import { StyleSheet } from "react-native";
import colors from "../assets/colors/Colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: colors.white,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    
  },
  logo: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: 'contain'
  },
});
export default style;
