import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListVote from "../components/lists/ListVote";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListVoteSeparator from "../components/lists/ListVoteSeparator";

const menuItems = [
  {
    title: "Mis Votos",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Mi Balance",
    icon: {
      name: "bank",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Balance",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListVote
          title="Nicolas Arnedo"
          address="0xd1b71c41a6128a6e40d2b78904a0b87c3c10d446b2383db9c96c2c81ea19f655"
          image={require("../assets/fotoCV2.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItems.title}
          ItemSeparatorComponent={ListVoteSeparator}
          renderItem={({ item }) => (
            <ListVote
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListVote
        title="Cerrar Sesión"
        IconComponent={<Icon name="logout" backgroundColor="#ff5252" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.background,
  },
});

export default AccountScreen;
