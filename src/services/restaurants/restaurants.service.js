import { mocks } from "./mock";
import camelize from "camelize";

export const transformRequest = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => ({
    ...restaurant,
    isOpenNow: !!restaurant.opening_hours?.open_now,
    isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    address: restaurant.vicinity,
  }));
  return camelize(mappedResults);
};

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mocks) {
      reject("Location not found");
    }
    resolve(camelize(mock));
  });
};

// restaurantsRequest()
//   .then(transformRequest)
//   .then(console.log)
//   .catch(console.log);
