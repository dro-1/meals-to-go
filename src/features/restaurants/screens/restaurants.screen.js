import React from "react";
import { StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "./../../../components/spacer/spacer.component";
import SafeArea from "./../../../components/utility/safe-area.component";

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
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  width: 100%;
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea height={StatusBar.currentHeight}>
      <SearchbarContainer>
        <Searchbar placeholder="Search" onChangeText={console.log} />
      </SearchbarContainer>
      <ListContainer
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
          { name: 15 },
          { name: 16 },
          { name: 17 },
          { name: 18 },
        ]}
        keyExtractor={(item) => item.name.toString()}
        renderItem={(item) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
