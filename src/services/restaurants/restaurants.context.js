import React, { useEffect, createContext, useState, useContext } from "react";

import { restaurantsRequest, transformRequest } from "./restaurants.service";
import { LocationContext } from "../location/location.context";
import { locations } from "../location/location.mock";

let response;
restaurantsRequest()
  .then(transformRequest)
  .then((res) => {
    response = res;
  })
  .catch(console.log);

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const getRestaurants = (loc) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(transformRequest)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setError("An error occured");
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      getRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
