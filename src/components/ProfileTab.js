import { colors } from "../assets/colors/Index";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "react-native-web";

const ProfileTab = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileTab}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: props.imageUrl,
          }}
        />
        <Text style={styles.profileText}>{props.name}</Text>
        <TouchableOpacity>
          <Image style={styles.settingsButton}
           source={{
            uri: "https://static.thenounproject.com/png/423480-200.png",
          }}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  profileTab: {
    backgroundColor: colors.primaryBlue,
    width: "95%",
    height: 80,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 10,
    margin: 10,
  },
  profileText: {
    color: colors.white,
    fontWeight: "bold",
    padding: 10,
  },
  tinyLogo: {
    marginLeft: 5,
    width: 50,
    height: 50,
    borderRadius: 15,
    alignContent: "center",
    justifyContent: "center",
  },
  settingsButton: {
    height: 40,
    width: 40,
    justifyContent: "flex-end",
    padding: 10,
    margin: 10,
  },
});
