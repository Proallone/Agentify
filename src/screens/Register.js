//https://www.positronx.io/react-native-firebase-login-and-user-registration-tutorial/

import React, { Component } from "react";
import { View, Image } from "react-native";
import firebase from "../database/Firebase";
import { style } from "../styles/Index";

import { Button, TextInput } from "react-native-paper";
import { LoadingIndicator } from "../components/Index";
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  registerUser = () => {
    if (this.state.email === "" && this.state.password === "") {
      alert("Wprowadź wszystkie dane!");
    } else if (this.state.email === "" || this.state.password === "") {
      alert("Niepełne wszystkie dane!");
    } else if (this.state.password !== this.state.passwordConfirmation) {
      alert("Hasła nie są takie same!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName,
          });
          console.log("User registered successfully!");
          this.setState({
            isLoading: false,
            displayName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
          });
          this.props.navigation.navigate("Login");
        })
        .catch((error) => {
          this.setState({
            isLoading: false,
            password: "",
            passwordConfirmation: "",
          });
          console.log({ errorMessage: error.message });
          alert(error.message);
        });
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
          style={style.inputStyle}
          placeholder="Imię i nazwisko..."
          autoFocus={true}
          autoCapitalize="words"
          textContentType="name"
          value={this.state.displayName}
          right={<TextInput.Icon name="account" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "displayName")}
        />
        <TextInput
          style={{ marginTop: 10 }}
          placeholder="Email..."
          value={this.state.email}
          autoCompleteType="email"
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          right={<TextInput.Icon name="at" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "email")}
        />
        <TextInput
          style={{ marginTop: 10 }}
          placeholder="Hasło..."
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          value={this.state.password}
          right={<TextInput.Icon name="key" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "password")}
          secureTextEntry={true}
        />
        <TextInput
          style={{ marginTop: 10 }}
          placeholder="Powtórz hasło..."
          value={this.state.passwordConfrimation}
          right={<TextInput.Icon name="key-change" disabled={true} />}
          onChangeText={(val) =>
            this.updateInputVal(val, "passwordConfirmation")
          }
          secureTextEntry={true}
        />
        <Button onPress={() => this.registerUser()}>Zarejestruj</Button>
        <Button onPress={() => this.props.navigation.navigate("Login")}>
          Posiadasz już konto? Zaloguj się
        </Button>
      </View>
    );
  }
}