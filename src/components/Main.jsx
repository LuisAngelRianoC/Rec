import React from "react";
import { Text, View, StyleSheet, StatusBar, Image } from "react-native";
import ListaRepos from "./ListaRepos";

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Aprende Kanjis</Text>
      </View>
      <View style={styles.listContainer}>
        {
            <ListaRepos></ListaRepos>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#082051',
    padding: 15,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Main;
