import { colors } from "../assets/colors/Index";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Divider, Title, Badge } from "react-native-paper";
import React from "react";

import { openImagePickerAsync } from "../services/ImagePicker";

const ProfileTab = (props) => {
  return (
    <View style={styles.profileTab}>
      <View style={styles.avatarOutline}>
        {/*Using openImagePickerAsync with .bind to disable auto triggering when entering this screen (problem with render function) 
        source https://stackoverflow.com/a/42330255/14476262*/}
        <TouchableOpacity onPressOut={openImagePickerAsync.bind()}>
          <Avatar.Image
            size={120}
            source={{
              uri: props.imageUrl,
            }}
          />
        </TouchableOpacity>
      </View>
      <Title style={styles.profileText}>{props.name}</Title>
    </View>
  );
};
export default ProfileTab;

const styles = StyleSheet.create({
  profileTab: {
    //backgroundColor: colors.white,
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  avatarOutline: {
    backgroundColor: colors.primary,
    width: 125,
    height: 125,
    borderRadius: 200,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  pictureBadge: {
    backgroundColor: colors.primary,
    width: 20,
    height: 20,
    borderRadius: 200,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  profileText: {
    color: colors.primary,
    fontWeight: "bold",
    alignContent: "center",
  },
});
