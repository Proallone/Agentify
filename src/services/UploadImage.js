
import saveMediaToStorage from "../services/FirebaseSave";
import firebase from "../database/Firebase";


const saveUserProfileImage = async (image) =>
  new Promise((resolve, reject) => {
    saveMediaToStorage(
      image,
      `${firebase.auth().currentUser.uid}/profileImage/profilePicture`
    ).then((res) => {
      firebase
        .firestore()
        .collection("user")
        .doc(firebase.auth().currentUser.uid)
        .update({ photoUrl: res })
        .then(() => resolve())
        .catch(() => reject());
    });
  })
  export default saveUserProfileImage
