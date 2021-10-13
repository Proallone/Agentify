import { colors } from "../assets/colors/Index";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { openImagePickerAsync } from "../services/ImagePicker";

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
