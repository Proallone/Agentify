//https://stackoverflow.com/questions/30853178/react-native-global-styles

//"use strict";
import { StyleSheet } from "react-native";
import colors from "../assets/colors/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: colors.secondary,
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: colors.secondary,
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
    backgroundColor: colors.secondary,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  smallBtn: {
    width: 120,
    backgroundColor: colors.secondary,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: colors.secondary,
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
});
