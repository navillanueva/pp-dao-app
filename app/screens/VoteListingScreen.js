import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { useState } from "react";

const listings = [
  {
    id: 1,
    title: "Campus 100% Sin Humo",
    description: "No se permite fumainto d",
    image: require("../assets/voto1.png"),
  },
  {
    id: 2,
    title: "Zona Azul Avenida de Orellana",
    description: "Efectivo el 15 deganés",
    image: require("../assets/voto2.png"),
  },
];

function VoteListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.background,
  },
});

export default VoteListingScreen;
