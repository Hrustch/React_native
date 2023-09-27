import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { Pressable, StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Image, Text } from 'react-native'

const Post = ({post}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View>
        <Image  source={{uri: post.imgURL}} style={styles.image}/>
        <Text>{post.descr}</Text>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.bottomViewView}>
          <Pressable onPress={()=>{navigation.navigate("Comments", {postID: post.id, img: post.imgURL, userID: post.userId})}}>
            <Ionicons name="chatbubble-outline" size={24} color={"#212121CC"} />
          </Pressable>
          <Text>0</Text>
        </View>
        <View style={styles.bottomViewView}>
            <Ionicons name="location-outline" size={24} color={"#212121CC"} />
            <Text>{post.geo}</Text>
        </View>
      </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  container:{
    marginTop: 32,
  },
  bottomView:{
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  bottomViewView:{
    flexDirection: 'row',
  },
  image:{
    borderRadius: 8,
    backgroundColor: "gray",
    width: "100%", 
    height: 240,
  }
})