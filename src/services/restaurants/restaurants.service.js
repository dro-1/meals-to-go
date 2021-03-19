import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const transformRequest = ({ results }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(() => {
      const random = Math.floor(Math.random() * mockImages.length);
      return mockImages[random];
    });
    return {
      ...restaurant,
      isOpenNow: !!restaurant.opening_hours?.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResults);
};

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mocks) {
      reject("Location not found");
    }
    resolve(camelize(mock));
  });
};
