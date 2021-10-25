import React,{ Component } from "react";
import { ScrollView, StatusBar } from "react-native";
import { Button } from "react-native-paper";

import { ProfileTab, NavigationTab } from "../components/Index";
import firebase from "../database/Firebase";
import {firebaseSignOut} from "../services/FirebaseMethods";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
      displayName: "",
      profilePicUrl: "",
    };
  }

  render() {
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      profilePicUrl: firebase.auth().currentUser.photoURL,
    };
    return (
      <ScrollView style={{ paddingTop: StatusBar.currentHeight }}>
        <ProfileTab
          imageUrl={this.state.profilePicUrl}
          name={this.state.displayName}
        />
        <Button
          style={{ alignSelf: "center", alignContent: "flex-end" }}
          onPress={() => firebaseSignOut(this.state.uid)}
        >
          Wyloguj
        </Button>
        <Button
          style={{ alignSelf: "center", alignContent: "flex-end" }}
          onPress={() => this.props.navigation.navigate("AddClient") }
        >
          Nowy Klient
        </Button>
      </ScrollView>
    );
  }
}
