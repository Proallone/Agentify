import React from "react";
import {ProfileTab,NavigationTab} from "../components/Index";
import { ScrollView,StatusBar } from 'react-native';
import firebase from '../database/Firebase';
import { Button } from "react-native-paper";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = { 
      uid: '',
      displayName: "",
      profilePicUrl: ""
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      console.log("Wylogowano użytkownika o ID: " + this.state.uid)
      /*
      możnaby dodać jakieś zerowanie state'u
      */
      
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      profilePicUrl: firebase.auth().currentUser.photoURL,
    }   
    return (
      <ScrollView style={{paddingTop:StatusBar.currentHeight}}>
        <ProfileTab imageUrl={this.state.profilePicUrl} name={this.state.displayName}/>
        <Button style={{alignSelf: "flex-end"}} onPress={() => this.signOut()}>
          Wyloguj
        </Button>
      </ScrollView>

    );
  }
}
