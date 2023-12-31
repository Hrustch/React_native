import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import { useDispatch } from "react-redux";
import { loginFirebaseThunk } from "../Redux/auth/operations";

export const LogScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/font/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/font/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/font/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const backgroundImage = "../assets/Photos/Photo_BG.png"

  const onSubmit = ()=>{
    dispatch(loginFirebaseThunk({email, password}))
    setEmail(null)
    setPassword(null)
  }



  return (
    <View style={styles.registerPage}>
      <ImageBackground source={require(backgroundImage)} imageStyle={styles.background} resizeMode='cover' > 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{height: "100%", justifyContent: "flex-end", paddingTop: 149}}>
            <View style={styles.regCard}>

              <View style={styles.form}>
                <Text style={styles.title}>Увійти</Text>

                <TextInput placeholder="Адреса електронної пошти" style={styles.input} onChangeText={setEmail}/>
                <View>
                  <TextInput placeholder="Пароль" style={styles.passInput} onChangeText={setPassword}/>
                  <Text style={styles.showPass}>Показати</Text>
                </View>          
                
              </View>
              <Pressable style={styles.buttonReg} onPress={onSubmit}><Text style={{color: 'white'}}>Увійти</Text></Pressable>

              <Pressable onPress={() => navigation.navigate("Registration")}><Text style={styles.haveAcc}>Немає аккаунту? Зареєструватися</Text></Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  registerPage: {

  },
  background: {
    height:'100%',
    width: "100%",
  },
  regCard: {
    alignItems: "center",
    color: "fff",
    backgroundColor: "#fff",
    paddingTop: 92,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 549,
    marginTop: 147,
  },


  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
  },

  avatar: {
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
    position: "absolute",
    top: -60
  }, 


  form: { gap: 12 },
  input: {
    backgroundColor: "#F6F6F6",
    padding: 16,
    borderRadius: 8,
    height: 50,
    width: 343,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  passInput: {
    width: 343,
    backgroundColor: "#F6F6F6",
    marginBottom: 43,
    height: 50,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    position: "relative",
  },
  showPass: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    position: "absolute",
    right: 16,
    top: 16,
  },
  buttonReg: {
    marginBottom: 16,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    gap: 12,
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    width: 343,
  },
  haveAcc: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    marginBottom: 45,
  },
});
export default LogScreen;
