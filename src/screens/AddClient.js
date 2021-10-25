import React, { Component } from "react";
import { View } from "react-native";
import firebase from "../database/Firebase";
import styles from "../styles/Style";

import { Button, Text, TextInput } from "react-native-paper";
import { LoadingIndicator } from "../components/Index";

export default class AddClient extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }
  /*state reset ref https://stackoverflow.com/a/43947937/14476262 */
  getInitialState = () => ({
    name: "",
    surname: "",
    PESEL: "",
    email: "",
    phone_number: "",
    post_code: "",
    city: "",
    adress: "",
  });

  resetState = () => {
    this.setState(this.getInitialState());
  };

  validatepesel = (pesel) => {
    /* function ref https://blog.aleksander.kaweczynski.pl/walidacja-numerow-pesel-nip-regon-w-javascript-i-php/ */
    var reg = /^[0-9]{11}$/;
    if (reg.test(pesel) == false) return false;
    else {
      var digits = ("" + pesel).split("");
      if (
        parseInt(pesel.substring(4, 6)) > 31 ||
        parseInt(pesel.substring(2, 4)) > 12
      )
        return false;

      var checksum =
        (1 * parseInt(digits[0]) +
          3 * parseInt(digits[1]) +
          7 * parseInt(digits[2]) +
          9 * parseInt(digits[3]) +
          1 * parseInt(digits[4]) +
          3 * parseInt(digits[5]) +
          7 * parseInt(digits[6]) +
          9 * parseInt(digits[7]) +
          1 * parseInt(digits[8]) +
          3 * parseInt(digits[9])) %
        10;
      if (checksum == 0) checksum = 10;
      checksum = 10 - checksum;

      return parseInt(digits[10]) == checksum;
    }
  };

  saveNewClient = async () => {
    if (
      this.state.name === "" ||
      this.state.surname === "" ||
      this.state.PESEL === "" ||
      this.state.email === "" ||
      this.state.phone_number === "" ||
      this.state.post_code === "" ||
      this.state.city === "" ||
      this.state.adress === ""
    ) {
      alert("Uzupełnij wszystkie pola!");
    } else if (this.validatepesel(this.state.PESEL) == false) {
      alert("Wprowadz prawidłowy PESEL!");
    } else {
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
          (this.state = this.resetState(this.getInitialState())),
          alert("Dodano klienta!")
        )
        .catch((error) => console.error("Error adding document: ", error));
    }
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
      <View style={styles.container}>
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
