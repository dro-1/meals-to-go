import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/restaurant-info-card.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  align-items: center;
  justify-content: center;
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
`;

const SearchbarContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea height={StatusBar.currentHeight}>
      <SearchbarContainer>
        <Searchbar placeholder="Search" onChangeText={console.log} />
      </SearchbarContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
