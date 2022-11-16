import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DebatesScreen from "../screens/DebatesScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import VoteNowButton from "./VoteNowButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Debates"
      component={DebatesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="disqus" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Votaciones"
      component={FeedNavigator}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <VoteNowButton
            onPress={() => navigation.navigate(routes.VOTACIONES)}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="city" color={color} size={size} />
        ),
      })}
    />
    <Tab.Screen
      name="Perfil"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
