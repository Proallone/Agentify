import React, { Component } from "react";
import { View, Image } from "react-native";
import firebase from "../database/Firebase";
import { style } from "../styles/Index";
import colors from "../assets/colors/Colors";

import { Button, Text, TextInput } from "react-native-paper";
import { LoadingIndicator } from "../components/Index";

export default class NewClient extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      PESEL: "",
      email: "",
      phone_number: "",
      post_code: "",
      city: "",
      adress: "",
    };
  }

  saveNewClient = async () => {
    firebase
      .firestore()
      .collection("clients_" + firebase.auth().currentUser.uid)
      .add({
        name: this.state.name,
        surname: this.state.surname,
        PESEL: parseInt(this.state.PESEL),
        email: this.state.email,
        phone_number: parseInt(this.state.phone_number),
        post_code: this.state.post_code,
        city: this.state.city,
        adress: this.state.adress,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(
        (docRef) => console.log("Document written with ID: ", docRef.id),
        alert("Dodano klienta!")
      )
      .catch((error) => console.error("Error adding document: ", error));
  };

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }
    return (
      <View style={style.container}>
        <Text style={colors.primary}>Dodaj klienta</Text>
        <TextInput
          style={{ marginTop: 5 }}
          placeholder="Imię"
          autoFocus={true}
          autoCapitalize="words"
          value={this.state.name}
          right={<TextInput.Icon name="account" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "name")}
        />
        <TextInput
          style={{ marginTop: 5 }}
          placeholder="Nazwisko"
          autoCapitalize="words"
          value={this.state.surname}
          //right={<TextInput.Icon name="account" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "surname")}
        />
        <TextInput
          style={{ marginTop: 5 }}
          placeholder="PESEL"
          keyboardType="phone-pad"
          maxLength={11}
          value={this.state.PESEL}
          //right={<TextInput.Icon name="account" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "PESEL")}
        />
        <TextInput
          style={{ marginTop: 5 }}
          placeholder="Email"
          value={this.state.email}
          autoCompleteType="email"
          autoCapitalize="none"
          keyboardType="email-address"
          right={<TextInput.Icon name="at" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "email")}
        />
        <TextInput
          style={{ marginTop: 5 }}
          placeholder="Telefon"
          dataDetectorTypes={"phoneNumber"}
          keyboardType="phone-pad"
          maxLength={9}
          value={this.state.phone_number}
          //right={<TextInput.Icon name="account" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "phone_number")}
        />
        <TextInput
          style={{ marginTop: 5 }}
          placeholder="Kod pocztowy"
          keyboardType="phone-pad"
          value={this.state.post_code}
          //right={<TextInput.Icon name="key-change" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "post_code")}
        />
        <TextInput
          style={{ marginTop: 5 }}
          placeholder="Miasto"
          value={this.state.city}
          //right={<TextInput.Icon name="key-change" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "city")}
        />
        <TextInput
          style={{ marginTop: 5 }}
          placeholder="Adres"
          value={this.state.adress}
          //right={<TextInput.Icon name="key-change" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "adress")}
        />
        <Button onPress={() => this.saveNewClient()}>Dodaj klienta</Button>
      </View>
    );
  }
}
