/* ŻRÓDŁO https://reactnativemaster.com/react-native-login-screen-tutorial/ */

import React from "react";
import { Button, Text, TextInput} from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";

import { colors } from "../assets/colors/Index";
import s from "../styles/Style";
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
      <View style={styles.container}>
            <View style={{alignItems: "center"}}>
        <Image style={styles.logo} source={require('../assets/images/Agentify_column_logo.png')}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
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