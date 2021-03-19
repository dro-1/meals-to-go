import React, { useState } from "react";
import { List } from "react-native-paper";
import styled from "styled-components/native";

import SafeArea from "../../../components/utility/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { ScrollView } from "react-native";

const StyledScrollView = styled(ScrollView)`
  width: 100%;
`;

const RestaurantDetails = ({ navigation, route }) => {
  const restaurant = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const handleBreakfastPress = () =>
    setBreakfastExpanded((prevBreakfastExpanded) => !prevBreakfastExpanded);

  const handleLunchPress = () =>
    setLunchExpanded((prevLunchExpanded) => !prevLunchExpanded);

  const handleDinnerPress = () =>
    setDinnerExpanded((prevDinnerExpanded) => !prevDinnerExpanded);

  const handleDrinkPress = () =>
    setDrinksExpanded((prevDrinkExpanded) => !prevDrinkExpanded);
  return (
    <SafeArea details>
      <RestaurantInfoCard restaurant={restaurant} />
      <StyledScrollView>
        <List.Section>
          <List.Accordion
            title="Breakfast"
            left={(props) => (
              <List.Icon {...props} icon="white-balance-sunny" />
            )}
            expanded={breakfastExpanded}
            onPress={handleBreakfastPress}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            left={(props) => (
              <List.Icon {...props} icon="white-balance-sunny" />
            )}
            expanded={lunchExpanded}
            onPress={handleLunchPress}
          >
            <List.Item title="Burger With Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => (
              <List.Icon {...props} icon="white-balance-sunny" />
            )}
            expanded={dinnerExpanded}
            onPress={handleDinnerPress}
          >
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Steak Fries" />
            <List.Item title="Veal Cutlet" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={(props) => (
              <List.Icon {...props} icon="white-balance-sunny" />
            )}
            expanded={drinksExpanded}
            onPress={handleDrinkPress}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
        </List.Section>
      </StyledScrollView>
    </SafeArea>
  );
};

export default RestaurantDetails;
