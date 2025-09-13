import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Button } from 'react-native';
import * as SMS from 'expo-sms';
import { useEffect, useState } from 'react';

export default function App() {
  const [disponible, setDisponible] = useState(false);
  const [telefono, setTelefono] = useState(undefined);
  const [mensaje, setMensaje] = useState(undefined);
  //Para que cuando corra el código checkee si está disponible el dispositivo
  useEffect(() => {
    async function verificarDisponibilidad() {
      const smsDisponible = await SMS.isAvailableAsync();
      setDisponible(smsDisponible);
    }
    verificarDisponibilidad();
  }, []);

  const enviarSMS = async () => {
    //Enviar un SMS es una actividad asíncrona
    const {respuesta} = await SMS.sendSMSAsync(
      ['1128055217'], //Números a los que se envía
      'Hola Lei!' //Mensaje
    );

    console.log(respuesta); //Si se envió o no
  }
  
  return (
    <View style={styles.container}>
      <TextInput keyboardType="numeric" value={telefono} placeholder='Número de teléfono' onChangeText={(value) => setTelefono(value)}/>
      <TextInput value={mensaje} placeholder='Mensaje' onChangeText={(value) => setMensaje(value)}/>
      {disponible ? <Button title="Enviar SMS" onPress={enviarSMS}/>:<Text>No se puede mandar el SMS</Text>}
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
