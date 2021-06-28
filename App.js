import * as React from "react";
import { StatusBar } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ExploreScreen from "./src/Screens/ExploreScreen";
import LikedScreen from "./src/Screens/LikedScreen";
import SettingsScreen from "./src/Screens/SettingsScreen";
import SupportScreen from "./src/Screens/SupportScreen";
import NavigationScreens from "./src/Navigation/NavigationScreens";

import DrawerContent from "./src/Components/DrawerContent";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar hidden />
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContentOptions={{
            activeTintColor: "#3e2465",
          }}
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={NavigationScreens} />
          <Drawer.Screen name="Explore" component={ExploreScreen} />
          <Drawer.Screen name="Liked" component={LikedScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Support" component={SupportScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });