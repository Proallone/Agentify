import React, { Component } from "react";
import { View } from "react-native";
import { Button, List} from "react-native-paper";
import styles from "../assets/styles/Style";
import ClientList from "../components/ClientsList";

export default class SearchClients extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <View style={styles.container}>
      
          <ClientList/>
      
      </View>
    );
  }
}
