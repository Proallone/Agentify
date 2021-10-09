//https://www.positronx.io/react-native-firebase-login-and-user-registration-tutorial/

import React, { Component } from "react";
import { View, ActivityIndicator, Image } from "react-native";
import firebase from "../database/Firebase";
import {style} from "../styles/Index"

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
          });
          this.props.navigation.navigate("Login");
        })
        .catch((error) => {
          this.setState({ errorMessage: error.message, isLoading: false });
          alert("Nieudana rejestracja!");
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
          placeholder="Imię i nazwisko"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, "displayName")}
        />
        <TextInput
          placeholder="Email"
          style={{ marginTop: 10 }}
          value={this.state.email}
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(val) => this.updateInputVal(val, "email")}
        />
        <TextInput
          style={{ marginTop: 10 }}
          placeholder="Hasło"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, "password")}
          secureTextEntry={true}
        />
        <TextInput
          style={{ marginTop: 10 }}
          placeholder="Powtórz hasło"
          value={this.state.passwordConfrimation}
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

