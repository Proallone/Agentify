import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Button, TextInput } from "react-native-paper";
import colors from "../assets/colors/Colors";

import {
  OutlinedButton,
  ContainedButton,
  LoadingIndicator,
  TextButton,
} from "../components/Index";

export default class Settings extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={style.container}>
          <View style={style.containerTwoCol}>
            <View style={style.item}>
              <TextInput
                label="Imię"
                icon="at"
                value="IMIE PLACEHOLDER"
                right={<TextInput.Icon name="at" disabled={true} />}
                disabled={true}
                /*  onChangeText={(val) => this.updateInputVal(val, "email")} */
              />
            </View>
            <View style={style.item}>
              <TextInput
                label="Nazwisko"
                value="NAZWISKO PLACEHOLDER"
                right={<TextInput.Icon name="key" disabled={true} />}
                /* onChangeText={(val) => this.updateInputVal(val, "password")} */
                disabled={true}
              />
            </View>
          </View>
          <TextInput
            style={{ marginTop: 10 }}
            value="EMAIL PLACEHOLDER"
            right={<TextInput.Icon name="key" disabled={true} />}
            /* onChangeText={(val) => this.updateInputVal(val, "password")} */
            disabled={true}
          />
          <TextInput
            style={{ marginTop: 10 }}
            value="NUMER TELEFONU PLACEHOLDER"
            right={<TextInput.Icon name="key" disabled={true} />}
            /* onChangeText={(val) => this.updateInputVal(val, "password")} */
            disabled={true}
          />
        </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 2,
    display: "flex",
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: colors.white,
    paddingTop: StatusBar.currentHeight,
  },
  containerTwoCol: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  item: {
    width: "50%", // is 50% of container width
  },
});
