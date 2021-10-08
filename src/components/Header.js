import { colors } from "../assets/colors/Index";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

function Header() {
  return (
    <View style={styles.headerTab}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: "https://static.thenounproject.com/png/423480-200.png",
        }}
      />
      <TouchableOpacity >
          
        <Text onPress={() => alert('This is a button!')}>Zapomniałeś hasła?</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
    headerTab: {
      backgroundColor: colors.primaryBlue,
      alignItems: "center",
      flexDirection: "row",
    },
    headerLogo: {
      width: 50,
      height: 50,
      borderRadius: 15,
      alignContent: "center",
      justifyContent: "center",
    },
    headerButton: {
      color: colors.white,
      fontWeight: "bold",
      alignContent: "center",
      padding: 10,
    },
  });