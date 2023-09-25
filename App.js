import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import MainScreen from './Components/MainScreen';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store.store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={store.persistor}>
        <MainScreen/>
      </PersistGate>
    </Provider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: '#fff',
  },
});
