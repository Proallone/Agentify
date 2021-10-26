import saveMediaToStorage from "./FirebaseSave";
import firebase from "../database/Firebase";

const saveDocument = async (document) =>
  new Promise((resolve, reject) => {
    saveMediaToStorage(
      document.uri,
      `${firebase.auth().currentUser.uid}/documents/${document.name}`
    ).then(() => {
      alert(`Dodano dokument ${document.name}!`);
    });
  });
export default saveDocument;
