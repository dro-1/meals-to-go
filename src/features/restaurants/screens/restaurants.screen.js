import React, { useContext } from "react";
import { StatusBar, FlatList } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import styled, { useTheme } from "styled-components/native";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "./../../../components/spacer/spacer.component";
import SafeArea from "./../../../components/utility/safe-area.component";
import { RestaurantsContext } from "./../../../services/restaurants/restaurants.context";

const SearchbarContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    padding: 16,
  },
}))`
  width: 100%;
`;

const Body = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const theme = useTheme();
  return (
    <SafeArea height={StatusBar.currentHeight}>
      <SearchbarContainer>
        <Searchbar placeholder="Search" onChangeText={console.log} />
      </SearchbarContainer>
      <Body>
        {isLoading ? (
          <ActivityIndicator
            size={80}
            animating={true}
            color={theme.colors.brand.primary}
          />
        ) : (
          <ListContainer
            data={restaurants}
            keyExtractor={(item) => item.name.toString()}
            renderItem={(item) => (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            )}
          />
        )}
      </Body>
    </SafeArea>
  );
};

export default RestaurantsScreen;
