import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container(StatusBar.currentHeight)}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" onChangeText={console.log} />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

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

export default RestaurantsScreen;
