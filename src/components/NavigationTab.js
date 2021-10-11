import { colors } from "../assets/colors/Index";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const NavigationTab = (props) => {
  return (
        <Button style={styles.navigationTab}>
            hej
        </Button>

  );
};
export default NavigationTab;

const styles = StyleSheet.create({
  navigationTab: {
    width: "40%",
    height: "20%",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginLeft: 10,
    marginTop: 10,
    marginRight:10,
  },
});
