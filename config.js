// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaR5Z_0LOPSMr6YIpkzZgRuxPhfb4A4iM",
  authDomain: "react-native-173bd.firebaseapp.com",
  projectId: "react-native-173bd",
  storageBucket: "react-native-173bd.appspot.com",
  messagingSenderId: "985134735098",
  appId: "1:985134735098:web:ea08368c4a1326d88cb343"
};

if(!getApps().length){
  initializeApp(firebaseConfig);
}


const auth = initializeAuth(getApp(), {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(getApp());
export const storage = getStorage(getApp());