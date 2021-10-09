//https://www.positronx.io/react-native-firebase-login-and-user-registration-tutorial/

import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator, Image } from "react-native";
import firebase from "../database/Firebase";

import { Button, Text, TextInput } from "react-native-paper";
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
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

  registerUser = () => {
    if (this.state.email === "" && this.state.password === "") {
      alert("Wprowadź dane logowania!");
    } else if (this.state.email === "" || this.state.password === "") {
      alert("Niepełne dane logowania!");
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
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
            <View style={{alignItems: "center"}}>
        <Image style={styles.logo} source={require('../assets/images/Agentify_column_logo.png')}/>
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Imię i nazwisko"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, "displayName")}
        />
        <TextInput
          placeholder="Email"
          style={{marginTop: 10}}
          value={this.state.email}
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(val) => this.updateInputVal(val, "email")}
        />
        <TextInput
         style={{marginTop: 10}}
          placeholder="Hasło"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, "password")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: 'contain'
  },
});
