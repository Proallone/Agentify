// components/login.js
//https://www.positronx.io/react-native-firebase-login-and-user-registration-tutorial/

import React, { Component } from "react";
import { Image,StyleSheet, View, ActivityIndicator } from "react-native";
import firebase from "../database/Firebase";

import { Button,TextInput} from "react-native-paper";

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
      alert("Wprowadź poprawne dane logowania!");
    } else if (this.state.email === "" || this.state.password === "") {
      alert("Niepełne dane logowania!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res);
          console.log("Zalogowano!");
          this.setState({
            isLoading: false,
            email: "",
            password: "",
          });
          this.props.navigation.navigate("Main");
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
          icon="at"
          placeholder="Email"
          value={this.state.email}
          right={<TextInput.Icon name="at" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "email")}
        />
        <TextInput
          style={{ marginTop: 10 }}
          placeholder="Hasło"
          value={this.state.password}
          right={<TextInput.Icon name="eye" disabled={true}/>}
          onChangeText={(val) => this.updateInputVal(val, "password")}
          maxLength={15}
          secureTextEntry={true}
        />
        <Button onPress={() => this.userLogin()}>Zaloguj</Button>
        <Button onPress={() => this.props.navigation.navigate("Forgot")}>
          Przypomnij hasło
        </Button>

        <Button onPress={() => this.props.navigation.navigate("Register")}>
          Zarejestruj się
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
