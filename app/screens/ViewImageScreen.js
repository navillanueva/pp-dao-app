import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/voto1.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: "8%",
    left: "5%",
  },
  deleteIcon: {
    position: "absolute",
    top: "8%",
    right: "5%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
