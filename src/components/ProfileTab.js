import { colors } from "../assets/colors/Index";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Title, IconButton } from "react-native-paper";
import React from "react";

import { openImagePickerAsync } from "../utils/ImagePicker";
import firebase from "../database/Firebase";
import {firebaseGetDocs} from "../services/FirebaseMethods";

export default class ProfileTab extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      profileImageUrl: firebase.auth().currentUser.photoURL,
    };
  }

  changeProfileImage = () => {
    openImagePickerAsync().then(() =>
      this.setState({
        profileImageUrl: firebase.auth().currentUser.photoURL,
      })
    );
  };

  render() {
    return (
      <View style={styles.profileTab}>
        <View style={styles.avatarOutline}>
          {/*Using openImagePickerAsync with .bind to disable auto triggering when entering this screen (problem with render function) 
            source https://stackoverflow.com/a/42330255/14476262*/}
          <TouchableOpacity onPressOut={this.changeProfileImage}>
            <Avatar.Image
              size={120}
              source={{
                uri: this.state.profileImageUrl,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.lowerTab}>
          <Title style={styles.profileText}>{this.state.userName}</Title>
          <IconButton
            icon="cog"
            size={30}
            color={colors.primary}
            style={{
              justifyContent: "space-around",
            }} onPress={()=>firebaseGetDocs()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileTab: {
    //backgroundColor: colors.white,
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  lowerTab: {
    flex: 1,
    flexDirection: "row",
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
  profileText: {
    color: colors.primary,
    fontWeight: "bold",
    alignContent: "center",
    justifyContent: "center",
  },
});
