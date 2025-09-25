import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

function Ejercicio3() {
  return (
    <View style={styles.container}>
        <Image source={{ uri: "../public/miFoto.png" }} style={styles.imagen}/>
        <Text style={styles.nombre}>Cesar</Text>
        <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#333', alignItems: 'center', justifyContent: 'center'},
   imagen: { width: 150, height: 150, borderRadius: 75, marginBottom: 15 },
  nombre: { fontSize: 22, fontWeight: 'bold', color: '#000000ff' },
});

export default Ejercicio3;