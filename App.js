import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <TextInput
      keyboardType="numeric"
      style={styles.input}/>    
    <TextInput
      style={styles.input}/>    
    <Pressable style={styles.button}>a</Pressable>
      <StatusBar style="auto" />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    margin: 5
  },
  button: {
    width: 100,
    fontSize: 20,
    textAlign: "center"
  }
});
