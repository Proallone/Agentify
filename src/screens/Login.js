// components/login.js
//https://www.positronx.io/react-native-firebase-login-and-user-registration-tutorial/

import React, { Component } from "react";
import { Image, View } from "react-native";
import { TextInput } from "react-native-paper";

import styles from "../assets/styles/Style";
import {
  LoadingIndicator,
  ContainedButton,
  TextButton,
} from "../components/Index";
import { firebaseSignIn } from "../services/FirebaseMethods";
import { emailValidation } from "../utils/Validations";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  userLogin = () => {
    if (this.state.email === "" && this.state.password === "") {
      alert("Wprowadź wszystkie dane!");
    } else if (this.state.email === "" || this.state.password === "") {
      alert("Niepełne dane logowania!");
    } else if (emailValidation(this.state.email) == false) {
      alert("Wprowadź poprawny adres email!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebaseSignIn(this.state.email, this.state.password);
      this.setState({
        isLoading: false,
        email: "",
        password: "",
      });
    }
  };

  registerRedirect = () => {
    this.props.navigation.navigate("Register");
  };

  resetRedirect = () => {
    this.props.navigation.navigate("Reset");
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }
    return (
      <View style={styles.container}>
        <View style={{ flex: 5, justifyContent: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.logo}
              source={require("../assets/images/Agentify_column_logo.png")}
            />
          </View>
          <TextInput
            icon="at"
            placeholder="Email..."
            value={this.state.email}
            right={<TextInput.Icon name="at" disabled={true} />}
            onChangeText={(val) => this.updateInputVal(val, "email")}
          />
          <TextInput
            style={{ marginTop: 10 }}
            placeholder="Hasło..."
            value={this.state.password}
            right={<TextInput.Icon name="key" disabled={true} />}
            onChangeText={(val) => this.updateInputVal(val, "password")}
            maxLength={15}
            secureTextEntry={true}
          />
          <ContainedButton text={"Zaloguj"} function={this.userLogin.bind()} />
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <TextButton
            text={"Zarejestruj się"}
            function={this.registerRedirect.bind()}
          />
          <TextButton
            text={"Przypomnij hasło"}
            function={this.resetRedirect.bind()}
          />
        </View>
      </View>
    );
  }
}
