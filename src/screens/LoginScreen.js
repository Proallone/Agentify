/* ŻRÓDŁO https://reactnativemaster.com/react-native-login-screen-tutorial/ */

import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { style } from "../styles/Index";
import colors from "../assets/colors/Colors";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.container}>
        <View style={style.logoContainer}>
        <Text style={style.logo}>Witaj!</Text>
        <Image
              style={style.tinyLogo}
              source={require("../assets/images/icon_main.png")}
        />
        </View>
        <View style={style.inputView}>
          <TextInput
            style={style.inputText}
            placeholder="Email..."
            placeholderTextColor={colors.white}
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={style.inputView}>
          <TextInput
            secureTextEntry
            style={style.inputText}
            placeholder="Hasło..."
            placeholderTextColor={colors.white}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity>
          <Text style={style.forgot} onPress={()=> navigate("Forgot")}>Zapomniałeś hasła?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.loginBtn} onPress={()=> navigate("Main")}>
          <Text style={style.loginText}>Zaloguj</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigate("Register")}>
          <Text style={style.signUpText}>Zarejestruj się!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
