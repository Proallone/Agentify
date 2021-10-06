/* ŻRÓDŁO https://reactnativemaster.com/react-native-login-screen-tutorial/ */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import colors from "../assets/colors/Colors";

export default class Forgot extends React.Component {
  state = {
    email: "",
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Przypomnij hasło</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor={colors.white}
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <TouchableOpacity style={styles.forgotBtn} onPress={()=> navigate("Login")}>
          <Text style={styles.loginText}>Przypomnij</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  forgotBtn: {
    width: 120,
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
