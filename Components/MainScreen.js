
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RegScreen } from '../Screens/RegistrationScreen'
import { LogScreen } from '../Screens/LoginScreen'
import { Home } from "../Screens/Home";
import LogOut from "./LogOut";

import { useSelector } from 'react-redux';
import { selectCurrentUserFirebase } from '../Redux/auth/selectors';
import { useFonts } from 'expo-font';
const MainStack = createStackNavigator();

export default function MainScreen() {
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
        <NavigationContainer>
          <MainStack.Navigator initialRouteName="Login">
            {!user ? <>
            <MainStack.Screen name="Registration" component={RegScreen} options={{ headerShown: false }}/>
            <MainStack.Screen name="Login" component={LogScreen} options={{ headerShown: false }}/></> :
            <>
            <MainStack.Screen
              name="Home"
              component={Home}
              options={({ route }) => {
                const navigationRoute =
                getFocusedRouteNameFromRoute(route) ?? "Posts";
                
                switch (navigationRoute) {
                  case "Posts": {
                    return {
                      headerStyle: {
                        backgroundColor: "#FFFFFF",
                      },
                      headerTitleStyle: {
                        fontFamily: "Roboto-Medium",
                        fontSize: 17,
                      },
                      headerRight: LogOut,
                    };
                  }
                  case "Create": {
                  }
                  case "Profile":
                    default: {
                      return {
                        headerShown: false,
                      };
                    }
                  }
                }}
                />
            </>
            }
            
            
          </MainStack.Navigator>
        </NavigationContainer>      
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: '#fff',
  },
});
