/* ŻRÓDŁO https://reactnativemaster.com/react-native-login-screen-tutorial/ */

import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { colors } from "../assets/colors/Index";
import s from "../styles/Style"
import firebase from "../database/Firebase";

export default class Forgot extends React.Component {
  state = {
    email: "",
  };

  resetPassword = () => {
    if (this.state.email === "" ) {
      alert("Wprowadź adres email!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .sendPasswordResetEmail(this.state.email)
        .then(() => {
          this.setState( {email: ""})
          this.props.navigation.navigate("Login");
        });
       
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={s.container}>
        <Text style={s.logo}>Przypomnij hasło</Text>
        <View style={s.inputView}>
          <TextInput
            style={s.inputText}
            placeholder="Email..."
            placeholderTextColor={colors.white}
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <TouchableOpacity style={s.forgotBtn} onPress={()=> this.resetPassword()}>
          <Text style={s.loginText}>Przypomnij hasło</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

