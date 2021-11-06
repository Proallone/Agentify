import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { LoadingIndicator } from "../components/Index";
import ContainedButton from "../components/ContainedButton";
import firebase from "../database/Firebase";
import colors from "../assets/colors/Colors";
import { Client, clientConverter } from "../models/Client";
import { addClientToFirestore } from "../services/FirebaseMethods";
import {
  peselValitadion,
  postalValidation,
  phoneValidation,
  emailValidation,
} from "../utils/Validations";
export default class AddClient extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }
  /*state reset ref https://stackoverflow.com/a/43947937/14476262 */
  getInitialState = () => ({
    name: "Thomas",
    surname: "Clown",
    PESEL: "68072204874",
    email: "thomas.clown@mail.com",
    phone_number: "123456789",
    post_code: "47-100",
    city: "Minnesota",
    address: "Canterbury St. 19c/20",
  });

  resetState = () => {
    this.setState(this.getInitialState());
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
      this.state.address === ""
    ) {
      alert("Uzupełnij wszystkie pola!");
    } else if (peselValitadion(this.state.PESEL) == false) {
      alert("Wprowadź prawidłowy PESEL!");
    } else if (emailValidation(this.state.email) == false) {
      alert("Wprowadź prawidłowy adres email!");
    } else if (phoneValidation(this.state.phone_number) == false) {
      alert("Wprowadź prawidłowy numer telefonu!");
    } else if (postalValidation(this.state.post_code) == false) {
      alert("Wprowadź prawidłowy kod pocztowy!");
    } else {
      const newClient = new Client(
        this.state.name,
        this.state.surname,
        this.state.PESEL,
        this.state.email,
        this.state.phone_number,
        this.state.post_code,
        this.state.city,
        this.state.address,
        firebase.firestore.FieldValue.serverTimestamp()
      );
      addClientToFirestore(newClient);
      this.state = this.resetState(this.getInitialState());
    }
  };

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  render() {
    /*  if (this.state.isLoading) {
      return <LoadingIndicator />;
    } */
    return (
      <KeyboardAwareScrollView style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ marginTop: 5 }}
            placeholder="Imię"
            autoFocus={true}
            maxLength={20}
            autoCapitalize="words"
            value={this.state.name}
            right={<TextInput.Icon name="account" disabled={true} />}
            onChangeText={(val) => this.updateInputVal(val, "name")}
          />
          <TextInput
            style={{ marginTop: 5 }}
            placeholder="Nazwisko"
            autoCapitalize="words"
            maxLength={20}
            value={this.state.surname}
            right={<TextInput.Icon name="account" disabled={true} />}
            onChangeText={(val) => this.updateInputVal(val, "surname")}
          />
          <TextInput
            style={{ marginTop: 5 }}
            placeholder="PESEL"
            keyboardType="phone-pad"
            maxLength={11}
            value={this.state.PESEL}
            right={<TextInput.Icon name="identifier" disabled={true} />}
            onChangeText={(val) => this.updateInputVal(val, "PESEL")}
          />
          <TextInput
            style={{ marginTop: 5 }}
            placeholder="Email"
            value={this.state.email}
            maxLength={30}
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
            right={<TextInput.Icon name="cellphone-android" disabled={true} />}
            onChangeText={(val) => this.updateInputVal(val, "phone_number")}
          />
          <TextInput
            style={{ marginTop: 5 }}
            placeholder="Kod pocztowy"
            keyboardType="phone-pad"
            maxLength={6}
            value={this.state.post_code}
            right={<TextInput.Icon name="postage-stamp" disabled={true} />}
            onChangeText={(val) => this.updateInputVal(val, "post_code")}
          />
          <TextInput
            style={{ marginTop: 5 }}
            placeholder="Miasto"
            maxLength={20}
            value={this.state.city}
            right={<TextInput.Icon name="city" disabled={true} />}
            onChangeText={(val) => this.updateInputVal(val, "city")}
          />
          <TextInput
            style={{ marginTop: 5 }}
            placeholder="Adres"
            maxLength={40}
            value={this.state.address}
            right={
              <TextInput.Icon name="information-variant" disabled={true} />
            }
            onChangeText={(val) => this.updateInputVal(val, "address")}
          />
          <ContainedButton
            text={"Dodaj klienta"}
            function={this.saveNewClient.bind()}
          ></ContainedButton>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    padding: 10,
    alignContent: "flex-start",
  },
});
