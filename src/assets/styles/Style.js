//https://stackoverflow.com/questions/30853178/react-native-global-styles

//"use strict";
import { StyleSheet, StatusBar } from "react-native";
import colors from "../colors/Colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    paddingRight: 35,
    paddingLeft: 35,
    backgroundColor: colors.white,
    paddingTop: StatusBar.currentHeight,
  },
  logo: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
});
export default style;
