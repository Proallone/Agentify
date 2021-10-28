import * as ImagePicker from "expo-image-picker";
import saveUserProfileImage from "../services/FirebaseUploadImage";

export const openImagePickerAsync = async () => {
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
