import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import HeaderBar from './HeaderBar'

const Page = ({ name }) => {
  return (
    <View>
      <HeaderBar/>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Page;
