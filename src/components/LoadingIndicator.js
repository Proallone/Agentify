import { colors } from "../assets/colors/Index";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";

const LoadingIndicator = () => {
  return (
    <View style={styles.preloader}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};
export default LoadingIndicator;

const styles = StyleSheet.create({
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
});
