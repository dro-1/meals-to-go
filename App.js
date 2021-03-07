//import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return <RestaurantsScreen />;
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
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    width: "100%",
    padding: 25,
  },
});
