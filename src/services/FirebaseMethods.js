import firebase from "../database/Firebase";

export const firebaseSignOut = (uID) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("User ID: " + uID + " signed out");
      /*
      możnaby dodać jakieś zerowanie state'u
      */
    })
    .catch((error) => this.setState({ errorMessage: error.message }));
};

export const firebaseGetDocs = async () => {
  firebase
    .firestore()
    .collection("clients_" + firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        return doc;
      });
    });
  };