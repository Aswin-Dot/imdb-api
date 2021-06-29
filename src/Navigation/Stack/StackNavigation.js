import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "../../Screens/HomeScreen";
import MovieScreen from "../../Screens/MovieScreen";
import AccountScreen from "../../Screens/AccountScreen";
import OscarScreen from "../../Screens/OscarScreen";
import EmmysScreen from "../../Screens/EmmysScreen";

import ExploreScreen from "../../Screens/ExploreScreen";
import LikedScreen from "../../Screens/LikedScreen";
import SettingsScreen from "../../Screens/SettingsScreen";
import SupportScreen from "../../Screens/SupportScreen";

import { Ionicons } from "@expo/vector-icons";

const HomeStack = createStackNavigator();

export const HomeStackScreen = ({ navigation }) => (
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

export const MovieStackScreen = ({ navigation }) => (
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

const TabTop = createMaterialTopTabNavigator();

const AwardTab = () => {
  return (
    <TabTop.Navigator>
      <TabTop.Screen name="Oscars" component={OscarScreen} />
      <TabTop.Screen name="Emmy's" component={EmmysScreen} />
    </TabTop.Navigator>
  );
};

export const AwardStackScreen = ({ navigation }) => (
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

export const AccountStackScreen = ({ navigation }) => (
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

/* ----- Individual Stacks ------- */ 

const ExploreStack = createStackNavigator();

export const ExploreStackScreen = ({ navigation }) => (
  <ExploreStack.Navigator
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
    <ExploreStack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        title: "Explore",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="md-menu" size={34} color="white" />
          </TouchableOpacity>
        ),
      }}
    />
  </ExploreStack.Navigator>
);

const LikedStack = createStackNavigator();

export const LikedStackScreen = ({ navigation }) => (
  <LikedStack.Navigator
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
    <LikedStack.Screen
      name="Liked"
      component={LikedScreen}
      options={{
        title: "Liked",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="md-menu" size={34} color="white" />
          </TouchableOpacity>
        ),
      }}
    />
  </LikedStack.Navigator>
);

const SupportStack = createStackNavigator();

export const SupportStackScreen = ({ navigation }) => (
  <SupportStack.Navigator
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
    <SupportStack.Screen
      name="Support"
      component={SupportScreen}
      options={{
        title: "Support",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="md-menu" size={34} color="white" />
          </TouchableOpacity>
        ),
      }}
    />
  </SupportStack.Navigator>
);

const SettingsStack = createStackNavigator();

export const SettingsStackScreen = ({ navigation }) => (
  <SettingsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#f7f43e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SettingsStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        title: "Settings",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="md-menu" size={34} color="white" />
          </TouchableOpacity>
        ),
      }}
    />
  </SettingsStack.Navigator>
);