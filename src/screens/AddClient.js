import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

import { LoadingIndicator } from "../components/Index";
import firebase from "../database/Firebase";
import styles from "../assets/styles/Style";
/* import { peselValitadion } from "../utils/PeselValidation";
import { emailValidation } from "../utils/EmailValidation";
import { phoneValidation } from "../utils/PhoneValidation";
import { postalValidation } from "../utils/PostalValidation";
 */
import { peselValitadion, postalValidation, phoneValidation, emailValidation } from "../utils/Validations";
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
    } else if (peselValitadion(this.state.PESEL) == false) {
      alert("Wprowadz prawidłowy PESEL!");
    } else if (emailValidation(this.state.email) == false) {
      alert("Wprowadz prawidłowy adres email!");
    } else if (phoneValidation(this.state.phone_number) == false) {
      alert("Wprowadz prawidłowy numer telefonu!");
    } else if (postalValidation(this.state.post_code) == false) {
      alert("Wprowadz prawidłowy kod pocztowy!");
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
          (docRef) => console.log("Added client with ID:", docRef.id),
          alert(`Dodano klienta ${this.state.name} ${this.state.surname}!`),
          (this.state = this.resetState(this.getInitialState()))
        )
        .catch((error) => console.error("Error adding client!", error));
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
          value={this.state.city}
          right={<TextInput.Icon name="city" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "city")}
        />
        <TextInput
          style={{ marginTop: 5 }}
          placeholder="Adres"
          value={this.state.adress}
          right={<TextInput.Icon name="information-variant" disabled={true} />}
          onChangeText={(val) => this.updateInputVal(val, "adress")}
        />
        <Button style={{marginTop: 5}} mode={"contained"} onPress={() => this.saveNewClient()}>Dodaj klienta</Button>
      </View>
    );
  }
}
