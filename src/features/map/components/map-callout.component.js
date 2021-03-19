import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";

import { Text } from "./../../../components/typography/text";
import WebView from "react-native-webview";

const Container = styled.View`
  padding: 5px;
  height: 200px;
  width: 200px;
`;
const RestaurantImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 10px;
`;

const CompactWebView = styled(WebView)`
  width: 120px;
  height: 120px;
`;

const MapCallOut = ({ restaurant }) => {
  const Image = Platform.OS === "android" ? CompactWebView : RestaurantImage;
  return (
    <Container>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center label="caption">
        {restaurant.name}
      </Text>
    </Container>
  );
};

export default MapCallOut;
