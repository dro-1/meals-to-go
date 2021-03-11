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

export const RestaurantsContextProvider = ({ children }) => (
  <RestaurantsContext.Provider value={response}>
    {children}
  </RestaurantsContext.Provider>
);
