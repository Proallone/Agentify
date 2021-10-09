/* ŻRÓDŁO https://reactnativemaster.com/react-native-login-screen-tutorial/ */

import React from "react";
import { Button, Text, TextInput} from "react-native-paper";
import { View, Image } from "react-native";

import {style} from "../styles/Index"
import firebase from "../database/Firebase";

export default class Forgot extends React.Component {
  state = {
    email: "",
  };

  resetPassword = () => {
    if (this.state.email === "") {
      alert("Wprowadź adres email!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .sendPasswordResetEmail(this.state.email)
        .then(() => {
          this.setState({ email: "" });
          this.props.navigation.navigate("Login");
        })
        .catch((error) => {
          alert("Brak konta powiązanego z adresem");
          console.log({ errorMessage: error.message });
        });
    }
  };

  render() {
    return (
      <View style={style.container}>
            <View style={{alignItems: "center"}}>
        <Image style={style.logo} source={require('../assets/images/Agentify_column_logo.png')}/>
        </View>
        <Text>Odzyskaj hasło</Text>

        <TextInput
          placeholder="Email..."
          onChangeText={(text) => this.setState({ email: text })}
        />

        <Button onPress={() => this.resetPassword()}>Zresetuj hasło</Button>
      </View>
    );
  }
}