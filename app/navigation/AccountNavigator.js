import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import AccountScreen from "../screens/AccountScreen";
import ViewImageScreen from "../screens/ViewImageScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Perfil" component={AccountScreen} />
    <Stack.Screen name="Balance" component={ViewImageScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
