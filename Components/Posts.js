import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Post from "./Post"

const Posts = ({postsArr})=>{
    return (
        <View styles={{flex: 1}}>
    <SafeAreaView>
        <ScrollView>
            {postsArr.map((post) => <Post key={post.id} post={post}/>)}
        </ScrollView>  
    </SafeAreaView>
        </View>
    )
}

export default Posts;