import { StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const NavigationButton = (props) => {
  return <Button style={styles.navigationButton} mode="contained">{props.text}</Button>;
};
export default NavigationButton;

const styles = StyleSheet.create({
  navigationButton: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },
});
