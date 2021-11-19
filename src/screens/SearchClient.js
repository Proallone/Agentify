import React, { Component } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { DataTable } from "react-native-paper";
import { getUserClients } from "../services/FirebaseMethods";
import {ClientsList} from "../components/Index"

export default class ClientSearch extends Component {
 
  render() {
    return (
     <ClientsList/>
    );
  }
}

