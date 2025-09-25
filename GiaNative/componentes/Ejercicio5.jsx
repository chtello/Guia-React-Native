import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function EjercicioCinco() {
  const frases = [
    "Me puse las Gucci con un short de Nike, buzo y cadena, estoy que goteo",
    "Sigo volando de ciudad en ciudad, tumbando el club, shout-out para Neo",
    "Con cara de que nada va a salir mal, soy un rockstar, 'toy que goteo",
    "Estoy donde yo les dije que iba a estar, ¿ustedes dónde están?, no los veo",
    "Me puse las Gucci con un short de Nike, buzo y cadena, estoy que goteo",
    "Sigo volando de ciudad en ciudad, tumbando el club, shout-out para Neo",
    "Con cara de que nada va a salir mal, soy un rockstar, 'toy que goteo",
    "Estoy donde yo les dije que iba a estar, ¿ustedes dónde están?, no los veo",
    "My life, bad life, secuencias que van a mil",
    "Falta calma, por eso tomo otra pill",
    "No sé cómo dormir, ella se volvió a ir",
    "6 a.m., vuelo pa' Madrid",
    "(Y mientras fumo le pido a la luna volver a verte)",
    "(Yo no sé qué voy a hacer)",
    "(Solamente siento que me va a atrapar lento la muerte, mujer)",
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {frases.map((frase, index) => (
          <Text key={index} style={styles.frase}>
            {frase}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  frase: {
    fontSize: 18,
    marginVertical: 10,
    color: "#388E3C", 
    textAlign: "center",
  },
});