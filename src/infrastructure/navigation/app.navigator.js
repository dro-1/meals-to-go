import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MapScreen from "../../features/map/screens/map.screen";
import SettingsScreen from "../../features/restaurants/screens/settings.screen";
import RestaurantsNavigator from "./restaurants.navigator";

const getIconName = (focused) => ({
  Map: focused ? "map" : "map-outline",
  Restaurant: focused ? "md-restaurant" : "md-restaurant-outline",
  Settings: focused ? "md-settings" : "md-settings-outline",
});

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ focused, color, size }) => (
      <Ionicons
        name={getIconName(focused)[route.name]}
        size={size}
        color={color}
      />
    ),
  };
};

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "#5282BD",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
