export const getPriceSortedData = (existingProductList, sortByPrice) => {
  if (sortByPrice && sortByPrice === "PRICE_HIGH_TO_LOW") {
    return existingProductList.sort((a, b) => b["price"] - a["price"]);
  }
  if (sortByPrice && sortByPrice === "PRICE_LOW_TO_HIGH") {
    return existingProductList.sort((a, b) => a["price"] - b["price"]);
  }
  return existingProductList;
};

export const getRatingSortedData = (existingProductList, sortByRating) => {
  if (sortByRating === 0) {
    return existingProductList;
  }
  const sortedProductList = existingProductList.filter(
    (item) => item.rating === parseInt(sortByRating)
  );
  return sortedProductList;
};

// export const getOffersSortedData = (existingProductList, sortByOffers) => {
//   if (sortByOffers === offerType) {
//     return existingProductList.filter(
//       (item) => item.offers[0] === sortByOffers
//     );
//   }
//   return existingProductList;
// };

export const getFilteredData = (
  existingProductList,
  fastDeliveryOnly,
  inStockOnly
) => {
  const sortedProductList = existingProductList
    .filter((item) => (fastDeliveryOnly ? item.fastDelivery : true))
    .filter((item) => (inStockOnly ? true : item.inStock));
  return sortedProductList;
};
