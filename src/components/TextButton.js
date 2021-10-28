import { StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const TextButton = (props) => {
  return (
    <Button
      style={styles.customButton}
      contentStyle={{ height: 50 }}
      mode={"text"}
      style={{ marginTop: 10, height: 50, justifyContent: "center" }}
      onPress={() => props.function()}
    >
      {props.text}
    </Button>
  );
};
export default TextButton;

const styles = StyleSheet.create({
  customButton: {
    marginTop: 5,
    height: 50,
    justifyContent: "center",
  },
});
