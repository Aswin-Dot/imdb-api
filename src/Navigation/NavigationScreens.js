import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { HomeStackScreen, MovieStackScreen, AwardStackScreen, AccountStackScreen } from "./Stack/StackNavigation";

const TabBottom = createMaterialBottomTabNavigator();

const NavigationScreens = () => (
  <TabBottom.Navigator>
    <TabBottom.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="home" size={24} color={color} />
        ),
      }}
    />
    <TabBottom.Screen
      name="Movie"
      component={MovieStackScreen}
      options={{
        tabBarLabel: "Movies",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="movie" size={24} color={color} />
        ),
      }}
    />
    <TabBottom.Screen
      name="Awards"
      component={AwardStackScreen}
      options={{
        tabBarLabel: "Awards",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="award" size={24} color={color} />
        ),
      }}
    />
    <TabBottom.Screen
      name="Account"
      component={AccountStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#d02860",
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="account-circle" size={24} color={color} />
        ),
      }}
    />
  </TabBottom.Navigator>
);

export default NavigationScreens;

