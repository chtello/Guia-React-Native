import React, { useState } from "react";
import {StyleSheet, View, Text, Image, ScrollView, Pressable, StatusBar,} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function EjercicioNueve() {
  const insets = useSafeAreaInsets();
  const [liked, setLiked] = useState(false);

  const hobbies = [
    "Jugar con hojas",
    "Dormir siestas largas",
    "Jugar en la hamaca",
    "Treparme en las sillas",
    "Comer",
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header fijo */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Mini App de Luna</Text>
      </View>

      {/* Foto e info */}
      <Image
        source={require("../assets/IMG-20250730-WA0002~2.jpg")}
        style={styles.foto}
      />
      <Text style={styles.nombre}>⏾⋆.˚ Luna ⏾⋆.˚</Text>
      <Text style={styles.info}>Edad: 6 Meses | Raza: Nose </Text>

      {/* Botón custom */}
      <Pressable
        style={[styles.boton, liked ? styles.botonActivo : styles.botonInactivo]}
        onPress={() => setLiked(!liked)}
      >
        <Text style={styles.botonTexto}>{liked ? "Siguiendo ❤️" : "Seguir"}</Text>
      </Pressable>

      {/* ScrollView solo para hobbies */}
      <ScrollView
        style={styles.scrollHobbies}
        contentContainerStyle={{ paddingBottom: insets.bottom, paddingTop: 10 }}
      >
        {hobbies.map((hobby, index) => (
          <View key={index} style={styles.hobbyCard}>
            <Text style={styles.hobbyTexto}>{hobby}</Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    padding: 15,
    backgroundColor: "#F57F17",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#8E24AA",
    textAlign: "center",
  },
  info: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginBottom: 15,
  },
  boton: {
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 10,
  },
  botonInactivo: {
    backgroundColor: "#42A5F5",
  },
  botonActivo: {
    backgroundColor: "#66BB6A",
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollHobbies: {
    maxHeight: 250, 
  },
  hobbyCard: {
    backgroundColor: "#F7E7C8",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  hobbyTexto: {
    fontSize: 16,
    color: "#000",
  },
});