import { useEffect, useReducer, useRef, useState } from "react";
import { useProduct } from "../../context/product-context";
import "./products.css";
import { useOffers } from "../../context/offers-context";
import { initialData, reducerFunction } from "../../reducer/product-reducer";
import {
  getPriceSortedData,
  getRatingSortedData,
  getFilteredData,
} from "../Utilities/product-utilities";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const { productList } = useProduct();
  const { offersList } = useOffers();
  const [showFilters, setShowFilters] = useState(false);
  const [sliderVal, setSliderVal] = useState(0);

  const [
    { inStockOnly, fastDeliveryOnly, sortByPrice, sortByRating, sortByOffers },
    dispatch,
  ] = useReducer(reducerFunction, initialData);

  const getOfferSortedData = (existingProductList, sortByOffers) => {
    const noDiscount = offersList.find((offer) => offer.discount === 0);
    const tenPercent = offersList.find((offer) => offer.discount === 10);
    const twelvePercent = offersList.find((offer) => offer.discount === 12);

    if (sortByOffers && sortByOffers === "NO_DISCOUNT") {
      console.log("sorting by no discount", noDiscount);
      const itemsWithNoDiscount = existingProductList.filter((products) =>
        products.offers.map((offer) => offer === noDiscount._id)
      );
      console.log("no discount selected");
      return itemsWithNoDiscount;
    } else if (sortByOffers && sortByOffers === "10_PERC_DISCOUNT") {
      console.log("sorting by 10% discount", tenPercent);
      const itemsWithTenPercDiscount = existingProductList.filter((product) =>
        product.offers.map((offer) => offer === tenPercent._id)
      );
      return itemsWithTenPercDiscount;
    } else if (sortByOffers && sortByOffers === "12_PERC_DISCOUNT") {
      console.log("sorting by 12% discount", twelvePercent);
      const itemsWithTwelvePercDiscount = existingProductList.filter(
        (product) => product.offers.map((offer) => offer === twelvePercent._id)
      );
      return itemsWithTwelvePercDiscount;
    } else return existingProductList;
  };

  const priceSortedData = getPriceSortedData(productList, sortByPrice);
  const ratingSortedData = getRatingSortedData(priceSortedData, sortByRating);
  const offersSortedData = getOfferSortedData(
    ratingSortedData,
    offersList,
    sortByOffers
  );
  const filteredData = getFilteredData(
    offersSortedData,
    fastDeliveryOnly,
    inStockOnly
  );

  const filtersDiv = useRef("none");
  const sliderStars = useRef(0);

  const getSliderValue = () => {
    setSliderVal(() => sliderStars.current.value);
  };

  const toggleFilterDiv = () => {
    setShowFilters((filters) => !filters);
    const showVal = showFilters ? "flex" : "none";
    filtersDiv.current.style.display = showVal;
  };

  useEffect(
    () => dispatch({ type: "SORT_BY_RATING", payload: sliderVal }),
    [sliderVal, setSliderVal]
  );

  return (
    <>
      <button
        className="button-filters btn fill-primary-yellow pd-05 mg-05 h-fit w-fit bdr-rad-m bdr-thick"
        onClick={toggleFilterDiv}
      >
        {showFilters ? "Show" : "Hide"} Sorting/Filters
      </button>
      <div ref={filtersDiv} className="flex flex-row-wrap w-75">
        <fieldset className="w-auto mg-1 pd-1">
          <legend>Sort By :</legend>
          <label>
            <input
              className="mg-r-05 txt-s"
              type="checkbox"
              checked={inStockOnly}
              onChange={() => dispatch({ type: "TOGGLE_STOCK" })}
            />
            Show Out of Stock
          </label>
          <br />
          <label>
            <input
              className="mg-r-05 txt-s"
              type="checkbox"
              checked={fastDeliveryOnly}
              onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
            />
            Show Fast Delivery Only
          </label>
        </fieldset>

        <fieldset className="w-auto mg-1 pd-1">
          <legend>Price :</legend>
          <label>
            <input
              className="mg-r-05 txt-xs"
              type="radio"
              onChange={() =>
                dispatch({
                  type: "SORT_BY_PRICE",
                  payload: "PRICE_LOW_TO_HIGH",
                })
              }
              checked={sortByPrice && sortByPrice === "PRICE_LOW_TO_HIGH"}
            />
            Low to High
          </label>
          <br />
          <label>
            <input
              className="mg-r-05 txt-xs"
              type="radio"
              onChange={() =>
                dispatch({
                  type: "SORT_BY_PRICE",
                  payload: "PRICE_HIGH_TO_LOW",
                })
              }
              checked={sortByPrice && sortByPrice === "PRICE_HIGH_TO_LOW"}
            />
            High To Low
          </label>
        </fieldset>

        <fieldset className="w-auto mg-1 pd-1">
          <legend>
            Rating : <span className="txt-700">{sliderVal}</span>
          </legend>
          1
          <input
            className="range-slider"
            type="range"
            min={1}
            max={5}
            ref={sliderStars}
            onChange={() => {
              getSliderValue();
            }}
            checked={sortByRating && sortByRating === sliderVal}
          />
          5
        </fieldset>

        <br />

        <fieldset className="w-auto mg-1 pd-1">
          <legend>Offers :</legend>
          <label>
            <input
              className="mg-r-05 txt-xs"
              type="radio"
              onChange={() =>
                dispatch({
                  type: "SORT_BY_OFFERS",
                  payload: "NO_DISCOUNT",
                })
              }
              checked={sortByOffers && sortByOffers === "NO_DISCOUNT"}
            />{" "}
            No Discount
          </label>
          <br />
          <label>
            <input
              className="mg-r-05 txt-xs"
              type="radio"
              onChange={() =>
                dispatch({
                  type: "SORT_BY_OFFERS",
                  payload: "10_PERC_DISCOUNT",
                })
              }
              checked={sortByOffers && sortByOffers === "10_PERC_DISCOUNT"}
            />{" "}
            10% Discount
          </label>
          <br />
          <label>
            <input
              className="mg-r-05 txt-xs"
              type="radio"
              onChange={() =>
                dispatch({
                  type: "SORT_BY_OFFERS",
                  payload: "12_PERC_DISCOUNT",
                })
              }
              checked={sortByOffers && sortByOffers === "12_PERC_DISCOUNT"}
            />{" "}
            12% Discount
          </label>
        </fieldset>

        <button
          className="btn fill-primary-yellow pd-05 mg-05 h-50 w-fit bdr-rad-m bdr-thick flex-self-center"
          onClick={() => dispatch({ type: "INITIAL_DATA" })}
        >
          Reset Filters
        </button>
      </div>

      <div className="h-auto w-100 flex flex-row-wrap mg-tb-1 mg-r-2">
        {filteredData.map((product) => (
          <ProductCard productList={filteredData} product={product} />
        ))}
        <div id="notification-container"></div>
      </div>
    </>
  );
};
