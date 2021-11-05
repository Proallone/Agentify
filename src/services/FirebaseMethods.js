import firebase from "../database/Firebase";
import { clientConverter } from "../models/Client";

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
        var client = doc.data();
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

export const registerUserWithEmail = (email, password, username) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      res.user.updateProfile({
        displayName: username,
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/asystentagenta-a0d7b.appspot.com/o/default%2Fdefault_profile_image.png?alt=media&token=d4d28168-bc43-4a26-99a7-1d8f629d6fe9",
      });
       const colRef = firebase
        .firestore()
        .collection("users")
        .doc(res.user.uid)

      /* ref https://stackoverflow.com/a/39627573 */
      var nameArray = username.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
      console.log(nameArray);

       colRef.set({
        name: nameArray[0],
        surname: nameArray[1],
        age: null,
      })  

      console.log(`User ${res.user.uid} registered succesfully`);
    })
    .catch((error) => {
      alert(error.message);
      console.log({ errorMessage: error.message });
    });
};
