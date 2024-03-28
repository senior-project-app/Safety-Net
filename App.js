import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Input from './frontend/components/Input';
import RegisterPage from './frontend/pages/Register';

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
