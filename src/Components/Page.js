import React from "react";
import { Text, ScrollView, View, StyleSheet, FlatList } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import HeaderBar from './HeaderBar'

const Page = ({ name, list}) => {
  return (
    <View style={{ paddingBottom: 250 }}>
      <HeaderBar />
      <Text style={styles.title}>{name}</Text>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ScrollView style={{ flex: 1 }}>
              <Card>
                <Card.Title style={{ fontSize: 22 }}>{item.name}</Card.Title>
                <Card.Divider />
                <Card.Image
                  style={{ height: 400 }}
                  source={{ uri: item.image.url }}
                ></Card.Image>
                <Text
                  style={{
                    marginVertical: 10,
                    fontSize: 14,
                  }}
                >
                <Text style={{fontWeight: "bold"}}>Place of Birth : </Text>{item.birthPlace}
                </Text>
                <Button
                  icon={
                    <Icon style={{ margin: 5 }} name="code" color="#ffffff" />
                  }
                  buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                  }}
                  title="MOVIES KNOWN FOR"
                />
              </Card>
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default Page;
