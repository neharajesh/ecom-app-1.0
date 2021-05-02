export const initialData = {
  inStockOnly: true,
  fastDeliveryOnly: false,
  sortByPrice: null,
  sortByRating: 0,
  sortByOffers: null,
};

export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "TOGGLE_STOCK":
      return (state = {
        ...state,
        inStockOnly: !state.inStockOnly,
      });
    case "TOGGLE_DELIVERY":
      return (state = {
        ...state,
        fastDeliveryOnly: !state.fastDeliveryOnly,
      });
    case "SORT_BY_PRICE":
      return (state = {
        ...state,
        sortByPrice: action.payload,
      });
    case "SORT_BY_RATING":
      return (state = {
        ...state,
        sortByRating: action.payload,
      });
    case "SORT_BY_OFFERS":
      return (state = {
        ...state,
        sortByOffers: action.payload,
      });
    case "INITIAL_DATA":
      return initialData;
    default:
      return state;
  }
};
