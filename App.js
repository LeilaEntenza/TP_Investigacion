import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import * as SMS from 'expo-sms';
import { useEffect, useState } from 'react';

export default function App() {
  const [disponible, setDisponible] = useState(false);
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    async function verificarDisponibilidad() {
      const smsDisponible = await SMS.isAvailableAsync();
      setDisponible(smsDisponible);
    }
    verificarDisponibilidad();
  }, []);

  const enviarSMS = async () => {
    if (!telefono || !mensaje) {
      return;
    }

    const { result } = await SMS.sendSMSAsync(
      [telefono],
      mensaje
    );

    console.log(result);
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        value={telefono}
        placeholder="Número de teléfono"
        onChangeText={setTelefono}
        style={styles.input}
      />
      <TextInput
        value={mensaje}
        placeholder="Mensaje"
        onChangeText={setMensaje}
        style={styles.input}
      />

      {disponible ? (
        <Pressable style={styles.button} onPress={enviarSMS}>
          <Text style={styles.buttonText}>Enviar SMS</Text>
        </Pressable>
      ) : (
        <Text>No se puede mandar el SMS</Text>
      )}

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
    padding: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
