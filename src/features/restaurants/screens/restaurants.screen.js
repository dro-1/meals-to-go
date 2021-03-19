import React, { useContext } from "react";
import { StatusBar, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled, { useTheme } from "styled-components/native";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "./../../../components/spacer/spacer.component";
import SafeArea from "./../../../components/utility/safe-area.component";
import { RestaurantsContext } from "./../../../services/restaurants/restaurants.context";
import Search from "../components/search.component";

const ListContainer = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    padding: 16,
  },
}))`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  width: 100%;
`;

const Body = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const theme = useTheme();
  return isLoading ? (
    <Body>
      <ActivityIndicator
        size={80}
        animating={true}
        color={theme.colors.brand.secondary}
      />
    </Body>
  ) : (
    <SafeArea height={StatusBar.currentHeight}>
      <Search />
      <ListContainer
        data={restaurants}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("RestaurantDetails", item)}
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
