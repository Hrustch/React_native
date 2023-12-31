import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreapePostScreen";
import ProfileScreen from "./ProfileScreen";


export const Home = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: () => {
          let iconName;
          if (route.name === "Posts") {
              iconName = "grid-outline";
          } else if (route.name === "Create") {
              iconName = "add-outline";
          } else if (route.name === "Profile") {
              iconName = "person-outline";
          }
          return <Ionicons name={iconName} size={24} color={"#212121CC"} />;
          },
          tabBarOptions: {
              justifyContent: "center",
              alignItems: "center",
              height: 20,
              activeColor: "#f0edf6",
              inactiveColor: "#3e2465",
          }            
          })
        }     
    >
      <Tabs.Screen name="Posts" component={PostsScreen}/>
      <Tabs.Screen name="Create" component={CreatePostsScreen}/>
      <Tabs.Screen name="Profile" component={ProfileScreen}/>
    </Tabs.Navigator>
  );
};
export default Home;