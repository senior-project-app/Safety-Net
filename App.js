import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPage from './frontend/Pages/CodeInput';

export default function App() {
  return (
    <View style={styles.container}>
      <StartPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8CCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpleInput: {
      textAlign: 'center',
      borderWidth: 2,
      borderRadius: 9,
      padding: 20,
      margin: 10,
      fontSize: 16,
      color: '#23027D',
      borderColor: '#23027D',
      backgroundColor: '#FFFFFF',
  },
});
