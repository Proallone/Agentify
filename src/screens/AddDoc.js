import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "../assets/styles/Style";
import addDocument from "../services/DocPicker"

export default class AddDoc extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          icon={"text-box-search-outline"}
          mode="outlined"
          onPress={() => addDocument()}
        >
          Dodaj dokument
        </Button>
      </View>
    );
  }
}
