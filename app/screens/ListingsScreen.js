import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Campus 100% sin humo",
    price: 1 + " LGN",
    image: require("../assets/voto1.png"),
  },
  {
    id: 2,
    title: "Becas de 500 euros a los 1000 estudiantes con mejor media",
    price: 1 + " LGN",
    image: require("../assets/voto2.png"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.VOTE_DETAILS, item)}
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

export default ListingsScreen;
