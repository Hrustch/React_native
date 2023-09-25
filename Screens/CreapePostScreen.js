import React, { useState, useEffect, useRef } from "react";
import { useFonts } from "expo-font";
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import { TextInput } from "react-native-gesture-handler";

const CreatePostsScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/font/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/font/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/font/Roboto-Regular.ttf"),
  });
  const navigation = useNavigation();
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [photo, setPhoto] = useState();
  const [descr, setDescr] = useState();
  const [geo, setGeo] = useState();

  useEffect(() => {    
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);




  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };
    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };



  const handleCreate = async() => {
    setPhoto(null);
    try{
    navigation.navigate("Posts")
    }
    catch(error){
      console.log(error)
    }
  }


  if (photo) {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 32}}>
            <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
            <Text style={{color: "#BDBDBD", marginTop: 8, fontSize: 16}}>Редагувати фото</Text>
        </View>
        <View >
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs} placeholder="Назва..." onChangeText={val => setDescr(val)}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Ionicons style={styles.locationIco} name="location-outline" size={24} color={"#BDBDBD"} />    
                <TextInput style={styles.inputs} placeholder="Місцевість..." onChangeText={val => setGeo(val)}></TextInput>
            </View>
        </View>
        <Pressable style={styles.buttonReg} onPress={handleCreate}><Text style={{color: 'white', fontSize: 16}}>Опублікувати</Text></Pressable>
      </View>
    );
  }


  return (
    <View style={{flex: 1}}>
      <Camera
        style={styles.camera}
        type={type}
        ref={cameraRef}
      >
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
                <Ionicons name="repeat-outline" size={36} color={"white"} />
            </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={takePic}
          >
            <View style={styles.takePhotoOut}>
              <View style={styles.takePhotoInner}></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>




    </View>
  );
}




const styles = StyleSheet.create({
  container: { 
    flex: 1,
    paddingHorizontal: 16, 
    paddingTop: 32,
  },
  preview: {
    width: "100%",
    height: 250,
    borderRadius: 8,
  },
  inputs:{
    height: 50,
    fontSize: 16,
  },
  locationIco:{
    alignSelf: "center"
  },
  inputContainer: {
    flexDirection: "row", 
    height: 50, 
    borderBottomWidth: 1, 
    borderBottomColor: "#BDBDBD",
    marginBottom: 16
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
    width: "100%",
    marginTop: 16,
  },

  camera: { flex: 1 },

  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },

  button: { alignSelf: "center", marginBottom: 16 },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
});

export default CreatePostsScreen;