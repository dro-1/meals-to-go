import React, { useEffect, createContext, useState } from "react";

import { restaurantsRequest, transformRequest } from "./restaurants.service";

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

  const getRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
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
    getRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
