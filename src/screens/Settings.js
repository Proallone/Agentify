import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import styles from "../assets/styles/Style";


export default class Settings extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          icon={"text-box-search-outline"}
          mode="outlined"
        >
          Ustawienia
        </Button>
      </View>
    );
  }
}
