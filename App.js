//import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container(StatusBar.currentHeight)}>
      <View style={styles.search}>
        <Text>Search</Text>
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: (height) => ({
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height,
  }),
  search: {
    backgroundColor: "green",
    width: "100%",
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    width: "100%",
    padding: 25,
  },
});
