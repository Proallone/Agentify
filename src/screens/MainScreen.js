import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../assets/colors/Colors";


export default class Main extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.profileTab}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://image.shutterstock.com/image-illustration/3d-illustration-internet-meme-why-260nw-433966000.jpg",
              }}
            />
            <Text style={styles.profileText}>Imię Nazwisko</Text>
          </View>
          <View />
          <View style={styles.profileTab}>
            <Text style={styles.profileText}>JOY</Text>
            <Text style={styles.profileText}>JOY</Text>
            <Text style={styles.profileText}>JOY</Text>
            <Text style={styles.profileText}>JOY</Text>
            <Text style={styles.profileText}>JOY</Text>
            <Text style={styles.profileText}>JOY</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  profileTab: {
    backgroundColor: colors.secondary,
    width: "95%",
    height: 80,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: 'flex-start',
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
});
