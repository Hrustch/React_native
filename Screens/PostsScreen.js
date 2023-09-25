import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { useFonts } from "expo-font";
import { useSelector } from "react-redux";
import { selectCurrentUserFirebase } from "../Redux/auth/selectors";

const PostsScreen = () => {
  const user = useSelector(selectCurrentUserFirebase)
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/font/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/font/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/font/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <ScrollView style={styles.box}>
        <View>
          <View style={styles.userBox}>
            <Image
              style={{ width: 60, height: 60, backgroundColor: "red" }}
            ></Image>
            <View style={styles.userInfo}>
              <Text style={styles.login}>{user.displayName}</Text>
              <Text style={styles.email}>{user.email }</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 17,
    fontWeight: 500,
    letterSpacing: 0.3,
  },
  titleBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  userBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    gap: 8,
  },
  userInfo: {
    flexDirection: "column",
  },
  login: {
    color: "#212121",
    fontSize: 13,
    fontFamily: "Roboto-Bold",
  },
  email: {
    color: "rgba(33, 33, 33, 0.80)",
    fontSize: 11,
  },
});
export default PostsScreen;
