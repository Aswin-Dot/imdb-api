import React from "react";
import { StyleSheet, TouchableOpacity, View, SafeAreaView, StatusBar } from "react-native";
import { Header } from "react-native-elements";
import { DrawerActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderMenu = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
    <StatusBar hidden/>
    <Header
      backgroundColor="#694fad"
      placement="left"
      leftComponent={
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Ionicons name="md-menu" size={34} color="white" />
          </TouchableOpacity>
        </View>
      }
      centerComponent={{
        text: "IMDB",
        style: { ...styles.title },
      }}
      // rightComponent={{ icon: "home", color: "#fff" }}
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginLeft: 10,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    // alignSelf: "center",
    marginTop: 5
  },
});

export default HeaderMenu;
