import React from "react";
import { SvgXml } from "react-native-svg";
import { Text } from "./../../../components/typography/text";

import star from "./../../../../assets/star";
import open from "./../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  RestaurantCardCover,
  Address,
  Details,
  DetailsEnd,
  Info,
  RestaurantCard,
  Rating,
  RestaurantType,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant }) => {
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
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Details>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <DetailsEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
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
