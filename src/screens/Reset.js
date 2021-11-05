/* ŻRÓDŁO https://reactnativemaster.com/react-native-login-screen-tutorial/ */

import React, { Component } from "react";
import { TextInput } from "react-native-paper";
import { View, Image } from "react-native";

import { style } from "../assets/styles/Index";
import { ContainedButton } from "../components/Index";
import { sendResetPasswordEmail } from "../services/FirebaseMethods";
import { emailValidation } from "../utils/Validations";
import { LoadingIndicator } from "../components/Index";

export default class Reset extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      isLoading: false,
    };
  }

  resetPassword = () => {
    if (this.state.email === "") {
      alert("Wprowadź adres email!");
    } else if (emailValidation(this.state.email) == false) {
      alert("Wprowadź prawidłowy adres email!");
    } else {
      this.setState({ isLoading: true });
      sendResetPasswordEmail(this.state.email);
      this.setState({ email: "", isLoading: false });
      alert("Na wskazany adres wysłano wiadomość z resetem hasła");
      this.props.navigation.navigate("Login");
    }
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }
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
