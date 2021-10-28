import firebase from "../database/Firebase";

const getDocumentsFirebase = async () =>
  firebase
    .firestore()
    .collection("clients_" + firebase.auth().currentUser.uid)
    .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    });
export default getDocumentsFirebase;
