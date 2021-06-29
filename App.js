import * as React from "react";
import { StatusBar } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  ExploreStackScreen,
  SettingsStackScreen,
  SupportStackScreen,
  LikedStackScreen,
} from "./src/Navigation/Stack/StackNavigation";
import DrawerContent from "./src/Components/DrawerContent";
import NavigationScreens from "./src/Navigation/NavigationScreens";
import RootNavigation from "./src/Navigation/RootNavigation";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar hidden />
        <RootNavigation/>
        {/* <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props}/>} >
          <Drawer.Screen name="Home" component={NavigationScreens} />
          <Drawer.Screen name="Explore" component={ExploreStackScreen} />
          <Drawer.Screen name="Liked" component={LikedStackScreen} />
          <Drawer.Screen name="Settings" component={SettingsStackScreen} />
          <Drawer.Screen name="Support" component={SupportStackScreen} />
        </Drawer.Navigator> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
