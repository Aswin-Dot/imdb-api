import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Button } from "react-native-elements";

import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";
import { MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const SplashScreen = ({ navigation }) => {

    let [fontsLoaded] = useFonts({Bangers_400Regular});

    if (!fontsLoaded) {
       return <ActivityIndicator size="small" color="#EEC748" />;
    } else {
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>IMDB</Text>
              <Animatable.Image
                animation="bounceIn"
                duration={1500}
                source={require("../Assets/logo1.png")}
                style={styles.logo}
                resizeMode="stretch"
              />
            </View>

            <Animatable.View
              animation="fadeInUpBig"
              duration={1500}
              style={styles.footer}
            >
              <Text style={styles.paragraph}>
                One destination for movie, tv and celebrity information!
              </Text>
              <Text style={styles.caption}>Sign in to continue.</Text>
              <Button
                title="Get Started"
                buttonStyle={styles.button}
                titleStyle={{ fontSize: 16 }}
                icon={
                  <MaterialIcons name="navigate-next" size={24} color="white" />
                }
                iconRight
                onPress={() => {
                  navigation.navigate("SignIn");
                }}
              />
            </Animatable.View>
          </View>
        );   
    }
};

const {height} = Dimensions.get("screen");
const height_logo = height * .3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEC748",
  },
  title: {
    fontFamily: "Bangers_400Regular",
    fontSize: 50,
    width: 100,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  paragraph: {
    fontSize: 26,
    marginHorizontal: 25,
    marginTop: 25,
    fontWeight: "bold",
    color: "#2e2e2e",
  },
  caption: {
    fontSize: 16,
    marginHorizontal: 25,
    marginVertical: 15,
  },
  button: {
    width: 160,
    height: 40,
    alignSelf: "flex-end",
    margin: 15,
    paddingRight: 20,
    borderRadius: 20,
    backgroundColor: "#EEC748",
  },
});

export default SplashScreen;
