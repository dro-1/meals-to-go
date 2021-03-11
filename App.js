import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import theme from "./src/infrastructure/theme";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import MapScreen from "./src/features/restaurants/screens/map.screen";
import SettingsScreen from "./src/features/restaurants/screens/settings.screen";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

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

  const Tab = createBottomTabNavigator();
  return !oswaldLoaded || !latoLoaded ? (
    <AppLoading />
  ) : (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "#5282BD",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
