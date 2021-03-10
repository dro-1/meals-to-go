import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)``;

export const Info = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
`;

export const RestaurantType = styled.Image`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

export const RestaurantClosedTemporarily = styled.Text`
  color: ${(props) => props.theme.colors.ui.error};
`;

export const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsEnd = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
