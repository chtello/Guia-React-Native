import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export default function EjercicioSiete() {
  return (
    <View style={styles.container}>
      {/* StatusBar con estilo claro */}
      <StatusBar style="light" />
      <Text style={styles.texto}>StatusBar Light</Text>

      {/*StatusBar dark */}
      <View style={styles.seccionOscura}>
        <StatusBar style="dark" />
        <Text style={styles.textoBlanco}>StatusBar Dark</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#024177ff", // azul oscuro
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },
  seccionOscura: {
    backgroundColor: "#f7c8e9ff", // rosa claro
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  textoBlanco: {
    fontSize: 18,
    color: "#000",
  },
});