import firebase from "../database/Firebase";
import { clientConverter } from "../models/Client";
import { User, userConverter } from "../models/User";

export const firebaseSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log(`User signed out`);
    })
    .catch((error) => console.log(error.message));
};

export const firebaseSignIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(`User ${res.user.uid} logged in`);
    })
    .catch((error) => {
      console.log({ errorMessage: error.message });
      alert(error.message);
    });
};

export const getUserClients = async () => {
  const clients = [];
  const colRef = firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .collection("clients");

  await colRef
    .withConverter(clientConverter)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let client = doc.data();
        client.id = doc.id;
        clients.push(client);
      });
    });
  return clients;
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

export const registerUserWithEmail = (email, password, name, surname) => {
  /* Właściwa rejestracja */
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      res.user
        .updateProfile({
          displayName: name + " " + surname,
          photoURL:
            "https://firebasestorage.googleapis.com/v0/b/asystentagenta-a0d7b.appspot.com/o/default%2Fdefault_profile_image.png?alt=media&token=d4d28168-bc43-4a26-99a7-1d8f629d6fe9",
        })
        .then(() => {
          /* Uzupełnienie informacji o userze w firebase*/
          const colRef = firebase
            .firestore()
            .collection("users")
            .doc(res.user.uid);

          colRef
            .withConverter(userConverter)
            .set(
              new User(
                name,
                surname,
                email,
                null,
                firebase.firestore.FieldValue.serverTimestamp(),
                res.user.uid
              )
            );
          console.log(`User ${res.user.uid} registered succesfully`);
        });
    })
    .catch((error) => {
      console.log({ errorMessage: error.message });
      alert(error.message);
    });
};
