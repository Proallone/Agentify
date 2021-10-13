import firebase from "../database/Firebase";

const saveMediaToStorage = async (media, path) =>
  new Promise((resolve, reject) => {
    const fileRef = firebase.storage().ref().child(path);

    fetch(media)
      .then((response) => response.blob())
      .then((blob) => fileRef.put(blob))
      .then((task) => task.ref.getDownloadURL())
      .then((downloadURL) => resolve(downloadURL))
      .catch(() => reject());
  })
  export default saveMediaToStorage;
