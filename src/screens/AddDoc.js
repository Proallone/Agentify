import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

import { LoadingIndicator } from "../components/Index";
import firebase from "../database/Firebase";
import styles from "../assets/styles/Style";
import { peselValitadion } from "../utils/PeselValidation";

export default class AddDoc extends Component {
  constructor() {
    super();
  }

  addDocument = () => {
      
  }
  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }
    return (
      <View style={styles.container}>
        <Button
          icon={"text-box-search-outline"}
          mode="outlined"
          onPress={() => this.saveNewClient()}
        >
          Dodaj dokument
        </Button>
      </View>
    );
  }
}
