import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { auth } from "./src/Firebase/firebase.utils";

import {
  ExploreStackScreen,
  SettingsStackScreen,
  SupportStackScreen,
  LikedStackScreen,
} from "./src/Navigation/Stack/StackNavigation";
import DrawerContent from "./src/Components/DrawerContent";
import NavigationScreens from "./src/Navigation/NavigationScreens";
import RootNavigation from "./src/Navigation/RootNavigation";

import "firebase/auth";

const Drawer = createDrawerNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      auth.onAuthStateChanged(user => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
    }

    setTimeout(() => {
      checkIsLoggedIn();
    }, 3000);
  }, [isLoggedIn])

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar hidden />
        {isLoggedIn ? (
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="Home" component={NavigationScreens} />
            <Drawer.Screen name="Explore" component={ExploreStackScreen} />
            <Drawer.Screen name="Liked" component={LikedStackScreen} />
            <Drawer.Screen name="Settings" component={SettingsStackScreen} />
            <Drawer.Screen name="Support" component={SupportStackScreen} />
          </Drawer.Navigator>
        ) : (
          <RootNavigation />
        ) }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
