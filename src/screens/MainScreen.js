import React from "react";
import {ProfileTab,NavigationTab} from "../components/Index";
import { ScrollView,StatusBar } from 'react-native';
import firebase from '../database/Firebase';
import { Button } from "react-native-paper";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }   
    return (
      <ScrollView style={{paddingTop:StatusBar.currentHeight}}>
        <ProfileTab imageUrl="https://i.imgur.com/DSgTE3S.jpg" name={this.state.displayName}/>
        <Button style={{alignSelf: "flex-end"}} onPress={() => this.signOut()}>
          Wyloguj
        </Button>
      </ScrollView>

    );
  }
}

/*
        <ProfileTab imageUrl="https://i.imgur.com/TUPW2it.jpg" name="Kamil Szurgot"/>
        <ProfileTab imageUrl="https://i.imgur.com/fYaerk0.jpg" name="Mateusz Kowalski"/>
        <ProfileTab imageUrl="https://i.imgur.com/fCkPK4N.jpg" name="Amadeusz Flutterniok"/>
        <ProfileTab imageUrl="https://i.imgur.com/KEcLlRE.jpg" name="Korneliusz Dyszczyński"/>
        <ProfileTab imageUrl="https://i.imgur.com/mB9WqE4.jpg" name="Mikołaj Struzik"/>
        <ProfileTab imageUrl="https://image.shutterstock.com/image-illustration/3d-illustration-internet-meme-why-260nw-433966000.jpg" name="Szymon Biliński"/>
        <ProfileTab imageUrl="https://scontent-frt3-2.xx.fbcdn.net/v/t1.15752-9/222028060_1018665118907011_2892416399512439247_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=1sSttE0pPVsAX8_6HfU&_nc_ht=scontent-frt3-2.xx&oh=e441865135c5405e1e6f38e97a2ab6a5&oe=61842D89" name="Kamil Stępień"/>
        <ProfileTab imageUrl="data:image/jpeg;base64,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" name="Zbigniew Świętach"/>
        */
