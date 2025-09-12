import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import * as SMS from 'expo-sms';

export default function App() {
  const sendSMSWithCallback = () => {
    SendSMS.send(
      {
        body: "hola",
        recipients: [1128055217],
        successCallback: (wasSent) => console.log('SMS sent:', wasSent),
        errorCallback: (error) => console.error('SMS error:', error),
        cancelCallback: () => console.log('SMS cancelled'),
      },
      (completed, cancelled, error) => {
        if (completed) console.log('SMS completed');
        else if (cancelled) console.log('SMS cancelled');
        else if (error) console.error('SMS error:', error);
      }
    );
  };
  
  return (
    <View style={styles.container}>
    <TextInput
      keyboardType="numeric"
      style={styles.input}/>    
    <TextInput
      style={styles.input}/>    
    <Pressable style={styles.button} onClick={sendSMSWithCallback}><Text style={styles.text}>a</Text></Pressable>
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
  },
  text: {
    textAlign: 'center'
  }
});
