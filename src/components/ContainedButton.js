import { StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const ContainedButton = (props) => {
  return (
    <Button
      style={styles.customButton}
      contentStyle={{ height: styles.customButton.height }}
      mode={"contained"}
      onPress={() => props.function()}
    >
      {props.text}
    </Button>
  );
};
export default ContainedButton;

const styles = StyleSheet.create({
  customButton: {
    height: 50,
    justifyContent: "center",
    marginTop: 10,
  },
});
