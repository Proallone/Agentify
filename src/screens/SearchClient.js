import React, { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { DataTable } from 'react-native-paper';
import { firebaseGetDocs } from '../services/FirebaseMethods';

export default class Reset extends Component {
  constructor() {
    super();
    this.state = {
      clients: []
    };
    this.dupa();
  }

  dupa = async () => {
    this.setState({
      clients: await firebaseGetDocs(),
    })
  }
  

  
  render() {

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>client</DataTable.Title>
          <DataTable.Title>Code</DataTable.Title>
          <DataTable.Title>
            Balance Available
          </DataTable.Title>
        </DataTable.Header>
        {
          this.state.clients.map(client => {
          return (
            <DataTable.Row
              key={client.id}
              onPress={() => {
                console.log(`selected client ${client.id}`)
              }}
            >
              <DataTable.Cell>
                {client.name}
              </DataTable.Cell>
              <DataTable.Cell>
                {client.surname}
              </DataTable.Cell>
              <DataTable.Cell numeric>
                {client.PESEL}
              </DataTable.Cell>
            </DataTable.Row>
        )})}
      </DataTable>
    </View>
  );
            }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
