import React from "react";
import { TouchableOpacity } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../Screens/HomeScreen";
import MovieScreen from "../Screens/MovieScreen";
import AccountScreen from "../Screens/AccountScreen";
import OscarScreen from "../Screens/OscarScreen";
import EmmysScreen from "../Screens/EmmysScreen";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#694fad",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="md-menu" size={34} color="white" />
          </TouchableOpacity>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const MovieStack = createStackNavigator();

const TabTop = createMaterialTopTabNavigator();

const MovieStackScreen = ({ navigation }) => (
  <MovieStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <MovieStack.Screen
      name="Movie"
      component={MovieScreen}
      options={{
        title: "Movie",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="md-menu" size={34} color="white" />
          </TouchableOpacity>
        ),
      }}
    />
  </MovieStack.Navigator>
);

const AwardStack = createStackNavigator();

const AwardTab = () => {
  return (
    <TabTop.Navigator>
      <TabTop.Screen name="Oscars" component={OscarScreen} />
      <TabTop.Screen name="Emmy's" component={EmmysScreen} />
    </TabTop.Navigator>
  );
};

const AwardStackScreen = ({ navigation }) => (
  <AwardStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <AwardStack.Screen
      name="Awards"
      component={AwardTab}
      options={{
        title: "Awards",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="md-menu" size={34} color="white" />
          </TouchableOpacity>
        ),
      }}
    />
  </AwardStack.Navigator>
);

const AccountStack = createStackNavigator();

const AccountStackScreen = ({ navigation }) => (
  <AccountStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#d02860",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <AccountStack.Screen
      name="Profile"
      component={AccountScreen}
      options={{
        title: "Profile",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="md-menu" size={34} color="white" />
          </TouchableOpacity>
        ),
      }}
    />
  </AccountStack.Navigator>
);

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

