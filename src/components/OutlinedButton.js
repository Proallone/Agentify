import { StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const OutlinedButton = (props) => {
  return (
    <Button
      style={styles.customButton}
      contentStyle={{ height: 50 }}
      mode={"Oultined"}
      style={{ marginTop: 10, height: 50, justifyContent: "center" }}
      onPress={() => props.function()}
    >
      {props.text}
    </Button>
  );
};
export default OutlinedButton;

const styles = StyleSheet.create({
  customButton: {
    width: "40%",
    height: 80,
    justifyContent: "center",
    marginBottom: 20,
  },
});
