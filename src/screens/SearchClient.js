import React, { Component } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { DataTable } from "react-native-paper";
import { firebaseGetDocs } from "../services/FirebaseMethods";

export default class ClientSearch extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
    };
    this.populateClientsArray();
  }

  populateClientsArray = async () => {
    this.setState({
      clients: await firebaseGetDocs(),
    });
  };

  render() {
    return (
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Imie</DataTable.Title>
            <DataTable.Title>Nazwisko</DataTable.Title>
            <DataTable.Title>PESEL</DataTable.Title>
          </DataTable.Header>
          {this.state.clients.map((client) => {
            return (
              <DataTable.Row
                key={client.id}
                onPress={() => {
                  console.log(`selected client ${client.id}`);
                }}
              >
                <DataTable.Cell>{client.name}</DataTable.Cell>
                <DataTable.Cell>{client.surname}</DataTable.Cell>
                <DataTable.Cell numeric>{client.PESEL}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
      </ScrollView>
    );
  }
}

