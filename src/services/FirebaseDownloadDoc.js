
import firebase from "../database/Firebase";

const getDocument = async (document) =>

/* TODO */
  new Promise((resolve, reject) => {
    saveMediaToStorage(
      document.uri,
      `${firebase.auth().currentUser.uid}/documents/${document.name}`
    ).then(() => {
      alert(`Dodano dokument ${document.name}!`);
    });
  });
export default getDocument;
