import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListVote from "../components/lists/ListVote";

function VoteDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.description}>
          No se permite fumar dentro del recinto del campus de la Escuela
          Superior perteneciente a la Universidad Carlos 3 de Madrid
        </AppText>
        <View style={styles.userContainer}>
          <ListVote
            image={require("../assets/Paloma.png")}
            title="Paloma Díaz Pérez"
            subTitle="0x02521e520459e81b5D642a6c4F7B3a3e4376c275"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: colors.secondary,
  },
  description: {
    fontSize: 10,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default VoteDetailsScreen;
