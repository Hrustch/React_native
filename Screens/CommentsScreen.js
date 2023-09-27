import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import Comment from "../Components/Comment";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addCommentsThunk, getCommentsThunk } from "../Redux/comments/operations";
import { selectComments } from "../Redux/comments/selectors";

const CommentsScreen = (props) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState("")
    const comments = useSelector(selectComments)

    useEffect(()=>{
        dispatch(getCommentsThunk())
    },[])

    const filteredComments = () => {
       const list = comments.filter(comment => comment.postID === props.route.params.postID)
       /* console.log("наш коммент ---> ",comment.postID, props.route.params.postID) */
       return list
    }


    const handleCommentSend = () =>{ 
        dispatch(addCommentsThunk({comment, postID: props.route.params.postID, userID: props.route.params.userID}))
        setComment("")
    }


  return (
    <View style={styles.container}>
      <Image style={styles.postImg} source={{uri: props.route.params.img}}/>
      <FlatList
        data={filteredComments()}
        keyExtractor={(post) => post.imgURL}
        contentContainerStyle={{
          gap: 32,
        }}
        renderItem={({ item }) => <Comment commentData={item} />}
      />
      <View style={styles.commentFieldContainer}>
        <Pressable style={styles.sendCommentButt} onPress={handleCommentSend}><Ionicons name="arrow-up-outline" size={32}/></Pressable>
        <TextInput style={styles.commentField} value={comment} onChangeText={setComment}></TextInput>
      </View>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 32,
  },
  postImg: {
    width: "100%",
    height: 240,
    backgroundColor: "gray",
    borderRadius: 8,
  },
  commentFieldContainer:{
    position: "relative",
    backgroundColor: "gray",
  },
  commentField:{
    width: "100%",
    backgroundColor: "#b3b5b4",
    height: 50,
    borderRadius: 99,
  },
  sendCommentButt:{
    zIndex: 9,
    right:0,
    position: "absolute"
  }
});
