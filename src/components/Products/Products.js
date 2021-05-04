import { useEffect, useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../context/product-context";
import "./products.css";
import { useOffers } from "../../context/offers-context";
import { BsLightningFill } from "react-icons/bs";
import { GiRoundStar } from "react-icons/gi";
import { initialData, reducerFunction } from "../../reducer/product-reducer";
import {
  getPriceSortedData,
  getRatingSortedData,
  getFilteredData,
} from "../Utilities/product-utilities";
import { AddToCart } from "../Cart/AddToCart";
import { AddToWishlist } from "../Wishlist/AddToWishlist";

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
    const noDiscount = offersList.find((offer) => offer.name === "No Discount");
    const tenPercent = offersList.find(
      (offer) => offer.name === "Ten Percent Discount"
    );
    const twelvePercent = offersList.find(
      (offer) => offer.name === "Twelve Percent"
    );

    if (sortByOffers === noDiscount) {
      return existingProductList.filter(
        (product) => product.offers[0] === noDiscount._id
      );
    } else if (sortByOffers === tenPercent) {
      return existingProductList.filter(
        (product) => product.offers[0] === tenPercent._id
      );
    } else if (sortByOffers === twelvePercent) {
      return existingProductList.filter(
        (product) => product.offers[0] === twelvePercent._id
      );
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

  useEffect(() => dispatch({ type: "SORT_BY_RATING", payload: sliderVal }), [
    sliderVal,
    setSliderVal,
  ]);

  const addRatingStars = (rating) => {
    let starString = [];
    for (let i = 0; i < rating; i++) {
      starString.push(
        <GiRoundStar size={20} className="mg-r-025 txt-yellow" />
      );
    }
    return starString;
  };

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
          1{"  "}
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
          {"  "}5
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
        {filteredData.map(
          ({
            _id,
            name,
            brand,
            image,
            price,
            rating,
            inStock,
            fastDelivery,
          }) => (
            <div
              key={_id}
              className="product-item card bdr-thin bdr-none bs bdr-rad-m mg-05 flex"
            >
              <img
                className="img-m mg-05 flex-self-center"
                src={image}
                alt={name}
              />
              <div className="w-100 mg-1 flex-col-center-items-y">
                <p className="txt-700 txt-l">{name}</p>
                <p className="txt-500 txt-s txt-grey">{brand.toUpperCase()}</p>
                <p className="txt-l txt-700 txt-blue mg-tb-025 price-blue">
                  Rs. {price}
                </p>
                <span className=" mg-tb-05">{addRatingStars(rating)}</span>
                {fastDelivery && (
                  <span className="badge-tl txt-500 pd-05 txt-s bdr-rad-round">
                    <BsLightningFill size={20} className="txt-yellow" />
                  </span>
                )}
                <div id="cont-fluid w-100">
                  <AddToCart
                    buttonVal={inStock ? "Add to Cart" : "Out of Stock"}
                    existingProductList={filteredData}
                    productId={_id}
                  />

                  <AddToWishlist
                    existingProductList={filteredData}
                    productId={_id}
                  />
                </div>
                <br />
                <Link
                  id="view-details"
                  className="txt-black txt-m txt-deco-none"
                  to={`/products/${_id}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          )
        )}
        <div id="notification-container"></div>
      </div>
    </>
  );
};
