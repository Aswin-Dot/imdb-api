import React, { useState, useEffect } from "react";
import { auth, createUserProfileDocument } from "../Firebase/firebase.utils";

import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { TextInput, Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";

const SignupScreen = ({ navigation }) => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [eye, setEye] = useState(true);
  const [confirmEye, setConfirmEye] = useState(true);
  const [loading, setLoading] = useState(false);

  const signUpUser = async () => {

    const { name, email, password, confirmPassword } = userData;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    setLoading(true);

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      setLoading(false);
      setUserData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      // await createUserProfileDocument(user, {name});

    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign Up!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        duration={1000}
        style={styles.footer}
      >
        <ScrollView>
          <Text style={styles.footerText}>Create an account</Text>

          <Text style={styles.footerCaption}>
            Already have an account?{" "}
            <Text
              onPress={() => navigation.navigate("SignIn")}
              style={{ fontWeight: "bold" }}
            >
              Log in
            </Text>
          </Text>

          <TextInput
            label="Name"
            autoCapitalize="none"
            autoCorrect={false}
            value={userData.name}
            onChangeText={(name) => setUserData(name)}
            left={<TextInput.Icon name="account" color="#EEC748" />}
            style={styles.input}
            theme={{
              colors: { primary: "#EEC748", underlineColor: "transparent" },
            }}
          />

          <TextInput
            label="Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={userData.email}
            onChangeText={(email) => setUserData(email)}
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
            value={userData.password}
            onChangeText={(password) => setUserData(password)}
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

          <TextInput
            label="Confirm Password"
            autoCapitalize="none"
            autoCorrect={false}
            value={userData.confirmPassword}
            onChangeText={(confirmPassword) => setUserData(confirmPassword)}
            secureTextEntry={confirmEye ? true : false}
            right={
              <TextInput.Icon
                onPress={() => setConfirmEye(!confirmEye)}
                name={confirmEye ? "eye-off" : "eye"}
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
            onPress={() => signUpUser()}
            style={styles.button}
            labelStyle={styles.buttonText}
            loading={loading ? true : false}
          >
            {loading ? null : "Sign Up"}
          </Button>
        </ScrollView>
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
    marginTop: 5,
    color: "#EEC748",
    alignSelf: "center",
    marginHorizontal: 20,
  },
  input: {
    marginHorizontal: 20,
    marginTop: 5,
    backgroundColor: "#fff",
  },
  button: {
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: "#EEC748",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
  },
});

export default SignupScreen;
