import * as DocumentPicker from "expo-document-picker";
import saveDocument from "./FirebaseUploadDoc";

export default addDocument = async () => {
  const result = await DocumentPicker.getDocumentAsync({
    type: "application/pdf",
    copyToCacheDirectory: false,
  });
  console.log(result);
  saveDocument(result);
};
