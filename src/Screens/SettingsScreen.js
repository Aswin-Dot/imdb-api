import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SettingsScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Support"
        onPress={() => navigation.navigate("Support")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SettingsScreen;