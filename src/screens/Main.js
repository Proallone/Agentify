import React, { Component } from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import colors from "../assets/colors/Colors";

import { ProfileTab} from "../components/Index";
import firebase from "../database/Firebase";
import { firebaseSignOut } from "../services/FirebaseMethods";

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
      // DO POPRAWKIIIIIIIIIIIIIII STYLEE
      <View style={styles.mainContainer}>
        <View style={{flex: 1, flexDirection: "row"}}>
          <ProfileTab
            imageUrl={this.state.profilePicUrl}
            name={this.state.displayName}
          />
        </View>
        <View style={styles.buttonsContainer}>
        <Button
            style={styles.buttonStyle}
            contentStyle={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
            }}
            mode="outlined"
            icon={"account-plus"}
            onPress={() => this.props.navigation.navigate("AddClient")}
          >
            Nowy Klient
          </Button>
          <Button
            style={styles.buttonStyle}
            contentStyle={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
            }}
            mode="outlined"
            icon={"file-document-edit-outline"}
            onPress={() => this.props.navigation.navigate("AddDoc")}
          >
            Dodaj polisę
          </Button>
          <Button
            style={styles.buttonStyle}
            contentStyle={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
            }}
            mode="outlined"
            icon={"account-search"}
            onPress={() => this.props.navigation.navigate("SearchClient")}
          >
            Znajdź klienta
          </Button>
          <Button
           style={styles.buttonStyle}
            contentStyle={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
            }}
            icon={"logout"}
            mode="outlined"
            onPress={() => firebaseSignOut(this.state.uid)}
          >
            Wyloguj
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.white,
    flex: 1,
  },
  buttonsContainer: {
    backgroundColor: colors.white,
    flexDirection: "row",
    flex:2,
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
    justifyContent: "space-evenly",
   
  },
  buttonStyle: {
    width: "40%",
    height: 80,
    justifyContent: "center",
    marginBottom: 20
  },
});
