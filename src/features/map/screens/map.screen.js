import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import Searchbar from "./../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "./../../../services/restaurants/restaurants.context";
import MapCallOut from "../components/map-callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = ({ navigation }) => {
  const [latDelta, setLatDelta] = useState(0);
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location;
  const { restaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    const NELat = viewport.northeast.lat;
    const SWLat = viewport.southwest.lat;

    setLatDelta(NELat - SWLat);
  }, [viewport, location]);

  return (
    <>
      <Searchbar />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => (
          <MapView.Marker
            title={restaurant.name}
            key={restaurant.name}
            coordinate={{
              longitude: restaurant.geometry.location.lng,
              latitude: restaurant.geometry.location.lat,
            }}
          >
            <MapView.Callout
              onPress={() =>
                navigation.navigate("RestaurantDetails", restaurant)
              }
            >
              <MapCallOut restaurant={restaurant} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </Map>
    </>
  );
};

export default MapScreen;
