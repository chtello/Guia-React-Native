import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Ejercicio2() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Cristian Tello</Text>
      <Text style={styles.texto}>6to</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 26, 
    color: '#000', 
    fontWeight: 'bold',
    marginTop: 6, 
  },
});

export default Ejercicio2;