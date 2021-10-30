import firebase from "../database/Firebase";
import { Client, clientConverter } from "../models/Client";

export const firebaseSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log(`User signed out`);
    })
    .catch((error) => console.log(error.message));
};

export const firebaseGetDocs = async () => {
  firebase
    .firestore()
    .collection("clients_" + firebase.auth().currentUser.uid)
    .withConverter(clientConverter)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var client = doc.data();
        console.log(client);
      });
    });
};

export const sendResetPasswordEmail = (email) => {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      console.log(`Password reset email sent to ${email}`);
    })
    .catch((error) => {
      console.log({ errorMessage: error.message });
    });
};

export const registerUserWithEmail = (email, password, username) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      res.user.updateProfile({
        displayName: username,
      });
      console.log(`User ${res.user.uid} registered succesfully`);
    })
    .catch((error) => {
      alert(error.message);
      console.log({ errorMessage: error.message });
    });
};
