import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import Page from "../Components/Page"

import { getActors, getActorDetails } from "../API/actorsApi";

const HomeScreen = () => {

  const [actors, setActors] = useState([])

  // useEffect(() => {
  //   const callActor = async () => {
  //     try {
  //       let list = await getActors();
  //       list = list.slice(50, 60).map((name) => name.substring(6, 15));

  //       let actorDetails = [];

  //       for (let i = 0; i < list.length; i++) {
  //         const details = await getActorDetails(list[i]);
  //         actorDetails.push(details)
  //       }
  //       setActors(actorDetails);
  //     } catch (e) {
  //       console.log(e.message)
  //       alert("Something went wrong, try again!");
  //     }
  //   }
  //   // console.log(actors);
  //   callActor();
  // }, [actors])

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default HomeScreen;
