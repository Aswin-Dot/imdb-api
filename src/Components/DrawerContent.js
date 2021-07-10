import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Text,
         Paragraph,
         Avatar, 
         Title, 
         Caption, 
         TouchableRipple, 
         Switch, 
         Drawer 
} from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { auth } from "../Firebase/firebase.utils"

const DrawerContent = (props) => {

    const [isDarkTheme, setDarkTheme] = React.useState(false)

    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    }

    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
              >
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Avatar.Image
                    source={{
                      uri: "https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.2x.h473.w710.jpg",
                    }}
                    size={50}
                  />
                  <View style={{ flexDirection: "column", marginLeft: 15 }}>
                    <Title style={styles.title}>Chandler Bing</Title>
                    <Caption style={styles.caption}>@mathewperry</Caption>
                  </View>
                </View>
              </TouchableOpacity>

              <View style={styles.row}>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    300
                  </Paragraph>
                  <Caption style={styles.caption}>Followers</Caption>
                </View>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    120
                  </Paragraph>
                  <Caption style={styles.caption}>Following</Caption>
                </View>
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                label="Explore"
                icon={({ color, size }) => (
                  <FontAwesome name="search" size={size} color={color} />
                )}
                onPress={() => {
                  props.navigation.navigate("Explore");
                }}
              />
              <DrawerItem
                label="Movies"
                icon={({ color, size }) => (
                  <FontAwesome name="film" size={size} color={color} />
                )}
                onPress={() => {
                  props.navigation.navigate("Movie");
                }}
              />
              <DrawerItem
                label="Liked"
                icon={({ color, size }) => (
                  <FontAwesome name="heart" size={size} color={color} />
                )}
                onPress={() => {
                  props.navigation.navigate("Liked");
                }}
              />
              <DrawerItem
                label="Support"
                icon={({ color, size }) => (
                  <FontAwesome name="support" size={size} color={color} />
                )}
                onPress={() => {
                  props.navigation.navigate("Support");
                }}
              />
              <DrawerItem
                label="Settings"
                icon={({ color, size }) => (
                  <Ionicons name="settings" size={size} color={color} />
                )}
                onPress={() => {
                  props.navigation.navigate("Settings");
                }}
              />
            </Drawer.Section>

            <Drawer.Section title="Preferences">
              <TouchableRipple onPress={toggleTheme}>
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch value={isDarkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>

        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
              label="Sign Out"
              icon={({ color, size }) => (
                <FontAwesome name="sign-out" size={size} color={color} />
              )}
              onPress={() => auth.signOut()}
            />
        </Drawer.Section>
      </View>
    );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
    marginRight: 5
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;