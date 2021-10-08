/* ŻRÓDŁO https://reactnativemaster.com/react-native-login-screen-tutorial/ */

import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import s from "../styles/Style"
import colors from "../assets/colors/Colors";


export default class Register extends React.Component {
  state = {
    name: "",
    surname: "",  
    email: "",
    password: "",
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={s.container}>
        <Text style={s.logo}>Poznajmy się!</Text>
        <View style={s.inputView}>
          <TextInput
            style={s.inputText}
            placeholder="Imię"
            placeholderTextColor={colors.white}
            onChangeText={(text) => this.setState({ name: text })}
          />
        </View>
        <View style={s.inputView}>
          <TextInput
            style={s.inputText}
            placeholder="Nazwisko"
            placeholderTextColor={colors.white}
            onChangeText={(text) => this.setState({ surname: text })}
          />
        </View>
        <View style={s.inputView}>
          <TextInput
            style={s.inputText}
            placeholder="Email"
            placeholderTextColor={colors.white}
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={s.inputView}>
          <TextInput
            secureTextEntry
            style={s.inputText}
            placeholder="Hasło"
            placeholderTextColor={colors.white}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity style={s.registerBtn} onPress={()=> navigate("Login")}>
          <Text style={s.loginText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

