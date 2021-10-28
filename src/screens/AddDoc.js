import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text, TextInput, List } from "react-native-paper";
import styles from "../assets/styles/Style";
import { addDocument } from "../utils/DocPicker";

export default class AddDoc extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
      {/*   <List.Section title="Accordions">
          <List.Accordion
            title="Uncontrolled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={true}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section> */}
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
