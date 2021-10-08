import { colors } from "../assets/colors/Index";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ProfileTab = (props) => {
  return (
    <View style={styles.profileTab}>
      <View>
        <Image
          style={styles.profilePicture}
          resizeMethod={"auto"}
          resizeMode={"cover"}
          source={{
            uri: props.imageUrl,
          }}
        />
      </View>
      <View>
        <Text style={styles.profileText}>{props.name}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.settingsButton}>
          <Image
            source={{
              uri: "https://static.thenounproject.com/png/423480-200.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfileTab;

const styles = StyleSheet.create({
  profileTab: {
    backgroundColor: colors.primaryBlue,
    width: "95%",
    height: 80,
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginLeft: 10,
    marginTop: 10,
    marginRight:10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 15,
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
    alignContent:"flex-start",
    height: 30,
    width: 30,
  },
});
