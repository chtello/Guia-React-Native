import React from "react";
import { StyleSheet, Text, View, Button, Alert, Pressable, Platform } from "react-native";

function Ejercicio4() {
  const mostrarAlerta = () => {
    if (Platform.OS === "web") {
      alert("Hola desde Web 🚀"); // navegador
    } else {
      Alert.alert("¡Hola!", "Presionaste el botón 😎"); // móvil
    }
  };

  return (
    <View style={styles.container}>
      {/* Botón nativo */}
      <Button title="Presioname" onPress={mostrarAlerta} />

      {/* Botón custom */}
      <Pressable style={styles.botonCustom} onPress={mostrarAlerta}>
        <Text style={styles.textoBoton}>Botón Custom</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  botonCustom: {
    backgroundColor: "#42A5F5",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  textoBoton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
}); 
export default Ejercicio4;