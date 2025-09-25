import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ejercicio1 from './componentes/Ejercicio1';
import Ejercicio2 from './componentes/Ejercicio2';
import Ejercicio3 from './componentes/Ejercicio3';
import Ejercicio4 from './componentes/Ejercicio4';
import Ejercicio5 from './componentes/Ejercicio5';
import Ejercicio6 from './componentes/Ejercicio6';
import Ejercicio7 from './componentes/Ejercicio7';
import Ejercicio9 from './componentes/Ejercicio9';
import EjercicioE from './componentes/EjercicioE';

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Ejercicio1/>
        <Ejercicio2/>
        <Ejercicio3/>
        <Ejercicio4/>
        <Ejercicio5/>
        <Ejercicio6/>
        <Ejercicio7/>
        <Ejercicio9/>
        <EjercicioE/>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});