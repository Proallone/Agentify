import saveMediaToStorage from "./FirebaseSave";
import firebase from "../database/Firebase";

const saveUserProfileImage = async (image) =>
  new Promise((resolve, reject) => {
    saveMediaToStorage(
      image,
      `${firebase.auth().currentUser.uid}/profileImage/profilePicture`
    ).then((res) => {
      const user = firebase.auth().currentUser;
      user
        .updateProfile({ photoURL: res })
        .then(() => resolve())
        .catch(() => reject());
    });
  });
export default saveUserProfileImage;
