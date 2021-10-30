/* ŻRÓDŁO https://reactnativemaster.com/react-native-login-screen-tutorial/ */

import React, { Component } from "react";
import { Button, TextInput } from "react-native-paper";
import { View, Image } from "react-native";

import { style } from "../assets/styles/Index";
import firebase from "../database/Firebase";
import { ContainedButton } from "../components/Index";
import { sendResetPasswordEmail } from "../services/FirebaseMethods";
import { emailValidation } from "../utils/Validations";

export default class Reset extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }

  resetPassword = () => {
    if (this.state.email === "") {
      alert("Wprowadź adres email!");
    } else if (emailValidation(this.state.email) == false) {
      alert("Wprowadź prawidłowy adres email!");
    } else {
      sendResetPasswordEmail(this.state.email);
      this.setState({ email: "" });
      alert("Na wskazany adres wysłano wiadomość z resetem hasła");
      this.props.navigation.navigate("Login");
    }
  };

  render() {
    return (
      <View style={style.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={style.logo}
            source={require("../assets/images/Agentify_column_logo.png")}
          />
        </View>
        <TextInput
          placeholder="Email..."
          right={<TextInput.Icon name="at" disabled={true} />}
          onChangeText={(text) => this.setState({ email: text })}
        />
        <ContainedButton
          text={"Zresetuj hasło"}
          function={this.resetPassword.bind()}
        />
      </View>
    );
  }
}
