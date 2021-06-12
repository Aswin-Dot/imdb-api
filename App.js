import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ActorScreen from "./src/Screens/ActorScreen";
import MovieScreen from './src/Screens/MovieScreen';


function TabNavigation() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen name="Actor" component={ActorScreen} />
      <Tab.Screen name="Movie" component={MovieScreen} />
    </Tab.Navigator>
  );
}


function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Tab"
      drawerContentOptions={{
        activeTintColor: "#3e2465",
        // inactiveTintColor: "#694fad",
      }}
    >
      <Drawer.Screen name="Tab" component={TabNavigation} />
      <Drawer.Screen name="Movie" component={MovieScreen} />
    </Drawer.Navigator>
  );
}

function StackNavigation() {
  const Stack  = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="IMDB"
        component={DrawerNavigation}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigation />
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