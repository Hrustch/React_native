import React, { useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { useFonts } from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUserFirebase } from "../Redux/auth/selectors";
import { getPostsThunk } from "../Redux/posts/operations";
import { selectPosts } from "../Redux/posts/selectors";
import Posts from "../Components/Posts";

const PostsScreen = () => {
  const user = useSelector(selectCurrentUserFirebase)
  const postsArr = useSelector(selectPosts)
  const dispatch = useDispatch()
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/font/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/font/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/font/Roboto-Regular.ttf"),
  });
  
  
  useEffect(()=>{
    dispatch(getPostsThunk())    
  },[])
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView>
        <View style={styles.box}>
          <View style={styles.userBox}>
            <Image
              style={{ width: 60, height: 60, backgroundColor: "red" }}
            ></Image>
            <View style={styles.userInfo}>
              <Text style={styles.login}>{user.displayName}</Text>
              <Text style={styles.email}>{user.email }</Text>
            </View>
          </View>
        <Posts postsArr={postsArr}/>
        </View>
{/*       <ScrollView style={styles.box}>
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 16,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 17,
    fontWeight: 500,
    letterSpacing: 0.3,
  },
  titleBlock: {
    flexDirection: "row",
    justifyContent: "center",
  },
  userBox: {
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
