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
