import { colors } from "../assets/colors/Index";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";

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
  });

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
  });

const openImagePickerAsync = async () => {
  let permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Brak uprawnień!");
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (pickerResult.cancelled === true) {
    console.log(pickerResult);
    return;
  }
  console.log(pickerResult);
  saveUserProfileImage(pickerResult.uri);
};

//const openImageRN = async () => {};

const ProfileTab = (props) => {
  return (
    <View style={styles.profileTab}>
      <View>
        {/*Using openImagePickerAsync with .bind to disable auto triggering when entering this screen (problem with render function) 
        source https://stackoverflow.com/a/42330255/14476262*/}
        <TouchableOpacity onPressOut={openImagePickerAsync.bind()}>
          <Image
            style={styles.profilePicture}
            resizeMethod={"auto"}
            resizeMode={"cover"}
            source={{
              uri: props.imageUrl,
            }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.profileText}>{props.name}</Text>
      </View>
    </View>
  );
};
export default ProfileTab;

const styles = StyleSheet.create({
  profileTab: {
    backgroundColor: colors.primary,
    width: "95%",
    height: 80,
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 7,
    alignContent: "center",
    justifyContent: "center",
  },
  profileText: {
    color: colors.white,
    fontWeight: "bold",
    alignContent: "center",
    padding: 10,
  },
  settingsButton: {
    alignContent: "flex-start",
    height: 30,
    width: 30,
  },
});
