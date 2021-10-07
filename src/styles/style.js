//https://stackoverflow.com/questions/30853178/react-native-global-styles

//"use strict";
import { StyleSheet } from "react-native";
import colors from "../assets/colors/Colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignContent: "center",
    justifyContent: 'center',
    flexDirection: "row",
    padding: 10,
    margin: 10,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: colors.primaryBlue,
  },
  inputView: {
    width: "80%",
    backgroundColor: colors.primaryBlue,
    borderRadius: 25,
    height: 70,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 60,
    color: colors.white,
  },
  forgot: {
    color: colors.black,
    fontSize: 11,
  },
  bigBtn: {
    width: "80%",
    backgroundColor: colors.primaryBlue,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  smallBtn: {
    width: 120,
    backgroundColor: colors.primaryBlue,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: colors.primaryBlue,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: colors.white,
    fontWeight: "bold",
  },
  signUpText: {
    color: colors.black,
    fontWeight: "bold",
  },
  tinyLogo: {
    marginLeft: 5,
    width: 50,
    height: 50,
    alignContent: "center",
    justifyContent: "center",
  },
});
export default style;
