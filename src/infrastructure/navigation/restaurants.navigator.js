import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import { Text } from "react-native";
import RestaurantDetails from "../../features/restaurants/screens/restaurant-details.screen";

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
