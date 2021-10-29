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
      {/*   {
          //this.state.clients.map((item,index)=> (
          <List.Section>

              <List.Item
                title={item.name}
                key={index}
                onPress={() => console.log(`Wybrano ${index}`)}
              />
  
          </List.Section>
          ))
        } */}
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
