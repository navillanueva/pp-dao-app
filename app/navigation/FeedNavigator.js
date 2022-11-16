import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import ListingsScreen from "../screens/ListingsScreen";
import VoteDetailsScreen from "../screens/VoteDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Votaciones" component={ListingsScreen} />
    <Stack.Screen name="VotacionDetalles" component={VoteDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
