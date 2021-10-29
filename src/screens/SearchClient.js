import React, { Component } from "react";
import { View } from "react-native";
import { Button, List} from "react-native-paper";
import styles from "../assets/styles/Style";

export default class SearchClients extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <View style={styles.container}>
      
          <List.Section>

              <List.Item
                title={"Placeholder"}
                key={"Klucz"}
                //onPress={() => console.log(`Wybrano ${index}`)}
              />
  
          </List.Section>
      
      </View>
    );
  }
}
