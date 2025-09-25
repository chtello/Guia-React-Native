import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
function Ejercicio6() {
  const insets = useSafeAreaInsets();

  const juegos = [
    {
      title: "God of War 1",
      score: 9,
      description: "Kratos, un guerrero espartano al servicio de Ares, busca vengarse de él por haberlo manipulado y hacerle asesinar a su propia familia. Con la ayuda de los dioses del Olimpo, se enfrenta a monstruos y mitología griega hasta convertirse en el nuevo Dios de la Guerra.",
      image: "../public/GOW1.png",
    },
    {
        title: "God of War 2",
        score: 10,
        description: "Ya como dios, Kratos desafía a los olímpicos y es traicionado por Zeus. Con la ayuda de los titanes, inicia una guerra abierta contra los dioses para cambiar su destino y vengarse de Zeus.",
        image: "../public/GOW2.png",
      },
      {
        title: "God of War 3",
        score: 10,
        description: "La guerra entre dioses y titanes alcanza su clímax. Kratos elimina brutalmente a casi todos los dioses del Olimpo (Poseidón, Hades, Hera, Zeus). Su venganza destruye el orden del mundo griego, dejando la mitología en ruinas.",
        image: "../public/GOW3.png",
      },
      {
        title: "God of War",
        score: 9,
        description: "Tras dejar atrás Grecia, Kratos vive en Midgard con su hijo Atreus. Tras la muerte de su esposa, ambos emprenden un viaje para esparcir sus cenizas en la cima más alta de los reinos. Enfrentan a dioses y criaturas nórdicas, revelando que Atreus es en realidad Loki.",
        image: "../public/GOW-2018.png",
      },
          {
      title: "God of War Ragnarok",
      score: 10,
      description: "Kratos y Atreus se preparan para el Ragnarök, la profecía del fin de los dioses nórdicos. Atreus busca entender su destino como Loki, mientras Kratos lucha contra su pasado y contra Odín y Thor. Culmina en una batalla épica que redefine el futuro de los Nueve Reinos.",
      image: "../public/GOW-Ragnarok.png",
    },

  ];

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom }
      ]}
    >
      {juegos.map((juego, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: juego.image }} style={styles.imagen} />
          <Text style={styles.titulo}>{juego.title}</Text>
          <Text style={styles.description}>{juego.description}</Text>
          <Text style={styles.puntaje}>Puntaje: {juego.score}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#333",
    paddingVertical: 20,
  },
  card: {
    width: "80%",
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  imagen: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Ejercicio6 ;