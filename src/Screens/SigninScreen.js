import React, {useState, useEffect} from "react";
import { auth, createUserProfileDocument } from "../Firebase/firebase.utils";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { TextInput, Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";

const SigninScreen = ({ navigation }) => {

  const [eye, setEye] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signInUser = async () => {

    setLoading(true)

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setLoading(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign In!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        duration={1000}
        style={styles.footer}
      >
        <Text style={styles.footerText}>Let's get Started!</Text>

        <Text style={styles.footerCaption}>
          Don't have a account!{" "}
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={{ fontWeight: "bold" }}
          >
            Sign up
          </Text>
        </Text>

        <TextInput
          label="Email"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="email" color="#EEC748" />}
          style={styles.input}
          theme={{
            colors: { primary: "#EEC748", underlineColor: "transparent" },
          }}
        />

        <TextInput
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={eye ? true : false}
          right={
            <TextInput.Icon
              onPress={() => setEye(!eye)}
              name={eye ? "eye-off" : "eye"}
              color="#EEC748"
            />
          }
          left={<TextInput.Icon name="lock-outline" color="#EEC748" />}
          theme={{
            colors: { primary: "#EEC748", underlineColor: "transparent" },
          }}
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={signInUser}
          style={styles.button}
          labelStyle={styles.buttonText}
          loading={loading ? true : false}
        >
          {loading ? null : "Sign In"}
        </Button>

        <View style={styles.divider}>
          <View
            style={{
              flex: 1,
              marginTop: 5,
              height: 2.5,
              backgroundColor: "#EEC748",
            }}
          />
          <View>
            <Text style={styles.dividerText}>or continue with</Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 5,
              height: 2.5,
              backgroundColor: "#EEC748",
            }}
          />
        </View>

        <View style={styles.divider}>
          <TouchableOpacity onPress={() => alert("google")}>
            <Icon reverse name="google" type="antdesign" color="#EEC748" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("facebook")}>
            <Icon
              reverse
              name="facebook-f"
              type="font-awesome-5"
              color="#EEC748"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("github")}>
            <Icon reverse name="github" type="antdesign" color="#EEC748" />
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

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
    flex: 1,
    justifyContent: "flex-end",
  },
  headerText: {
    paddingBottom: 30,
    paddingHorizontal: 20,
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  footer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  footerText: {
    fontSize: 28,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
    alignSelf: "center",
    color: "#EEC748",
  },
  footerCaption: {
    fontSize: 20,
    marginTop: 10,
    color: "#EEC748",
    alignSelf: "center",
    marginHorizontal: 20,
  },
  divider: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
    marginTop: 15
  },
  dividerText: {
    fontSize: 20,
    color: "#EEC748",
    marginHorizontal: 10,
  },
  input: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  button: {
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: "#EEC748",
    alignItems:'center',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default SigninScreen;
