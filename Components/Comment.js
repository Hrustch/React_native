import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'

const Comments = ({commentData}) => {
  return (
    
    <View style={styles.comments}>
        <View>
            <Image style={{}}></Image>
        </View>
        <View>
            <Text>{commentData.comment}</Text>
        </View>
    </View>
  )
}

export default Comments

const styles = StyleSheet.create({

    comments: {

    },

    avatarImg: {
        width: 28, 
        height: 28,
        backgroundColor: "gray"
    },
})