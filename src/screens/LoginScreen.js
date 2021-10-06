/* ŻRÓDŁO https://reactnativemaster.com/react-native-login-screen-tutorial/ */

import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import s from "../styles/style"
import colors from "../assets/colors/Colors";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={s.container}>
        <Text style={s.logo}>Witaj!</Text>
        <View style={s.inputView}>
          <TextInput
            style={s.inputText}
            placeholder="Email..."
            placeholderTextColor={colors.white}
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={s.inputView}>
          <TextInput
            secureTextEntry
            style={s.inputText}
            placeholder="Hasło..."
            placeholderTextColor={colors.white}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity>
          <Text style={s.forgot} onPress={()=> navigate("Forgot")}>Zapomniałeś hasła?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.loginBtn} onPress={()=> navigate("Main")}>
          <Text style={s.loginText}>Zaloguj</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigate("Register")}>
          <Text style={s.signUpText}>Zarejestruj się!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
