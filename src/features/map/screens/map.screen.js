import React from "react";
import MapView from "react-native-maps";

import Searchbar from "./../components/search.component";
const Map = () => (
  <>
    <Searchbar />
    <MapView style={{ height: "100%", width: "100%" }} />
  </>
);

export default Map;
