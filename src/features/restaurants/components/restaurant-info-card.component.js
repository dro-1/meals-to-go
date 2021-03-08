import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Text, Image } from "react-native";

import star from "./../../../../assets/star";
import open from "./../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
`;

//const RestaurantCardCover = styled(Card.Cover)``

const Info = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
`;

const RestaurantType = styled.Image`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

const RestaurantClosedTemporarily = styled.Text`
  color: ${(props) => props.theme.colors.ui.error};
`;

const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
`;

const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DetailsEnd = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://img.jakpost.net/c/2019/11/12/2019_11_12_82229_1573532922._large.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Details>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <DetailsEnd>
            {isClosedTemporarily && (
              <RestaurantClosedTemporarily variant="label">
                CLOSED TEMPORARILY
              </RestaurantClosedTemporarily>
            )}
            <Spacer size="medium" position="left">
              {isOpenNow && <SvgXml xml={open} width={30} height={30} />}
            </Spacer>
            <Spacer size="medium" position="left">
              <RestaurantType source={{ uri: icon }} />
            </Spacer>
          </DetailsEnd>
        </Details>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
