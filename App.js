import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RegScreen } from './Screens/RegistrationScreen'
import { LogScreen } from './Screens/LoginScreen'
export default function App() {
  return (
      <RegScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: '#fff',
  },
});
