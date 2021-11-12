import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Button, TextInput } from "react-native-paper";
import colors from "../assets/colors/Colors";
import { getUserData } from "../services/FirebaseMethods";

import {
  OutlinedButton,
  ContainedButton,
  LoadingIndicator,
  TextButton,
  ClickableAvatar,
} from "../components/Index";

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      userData: { name: "", surname: "", phone_number: "", email: "" },
      isLoading: true,
    };
    this.fillUserData();
  }

  fillUserData = async () => {
    this.setState({
      userData: await getUserData(),
      isLoading: false,
    });
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }
    return (
      <View style={style.container}>
        <ClickableAvatar />
        <TextInput
          label="Imię"
          icon="at"
          value={this.state.userData.name}
          //right={<TextInput.Icon name="at" disabled={true} />}
          disabled={true}
          /*  onChangeText={(val) => this.updateInputVal(val, "email")} */
        />

        <TextInput
          style={{ marginTop: 15 }}
          label="Nazwisko"
          value={this.state.userData.surname}
          //right={<TextInput.Icon name="key" disabled={true} />}
          /* onChangeText={(val) => this.updateInputVal(val, "password")} */
          disabled={true}
        />

        <TextInput
          label="Adres email"
          style={{ marginTop: 15 }}
          value={this.state.userData.email}
          //right={<TextInput.Icon name="key" disabled={true} />}
          /* onChangeText={(val) => this.updateInputVal(val, "password")} */
          disabled={true}
        />
        <TextInput
          label="Numer telefonu"
          style={{ marginTop: 15, marginBottom: 5 }}
          value={this.state.userData.phone_number}
          //right={<TextInput.Icon name="key" disabled={true} />}
          /* onChangeText={(val) => this.updateInputVal(val, "password")} */
          disabled={true}
        />
        <ContainedButton text={"Zmień dane"} function={getUserData.bind()} />
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: colors.white,
    //paddingTop: StatusBar.currentHeight,
    //justifyContent:"space-between"
  },
});
