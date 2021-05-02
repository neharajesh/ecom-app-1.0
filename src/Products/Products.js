import { useCart } from "../context/cart-context";
import { useEffect, useReducer, useRef, useState } from "react";
import { useWishlist } from "../context/wishlist-context";
import { Link } from "react-router-dom";
import { showNotification } from "../Utilities/toast";
import { useProduct } from "../context/product-context";
import { updateCart } from "../Utilities/cart-utilities";
import "./products.css";
import { updateWishlist } from "../Utilities/wishlist-utilities";
import { useOffers } from "../context/offers-context";
import { BsLightningFill } from "react-icons/bs";
import { GiRoundStar } from "react-icons/gi";
import { filteredData } from "./ProductDetails";
import { ProductFilters } from "./ProductFilters";

export const Products = () => {
  const { productList } = useProduct();
  const { offersList } = useOffers();
  const { setCartCount, setCartPrice, itemsInCart, setItemsInCart } = useCart();
  const { itemsInWishlist, setItemsInWishlist } = useWishlist();
  const [showFilters, setShowFilters] = useState(false);
  const [sliderVal, setSliderVal] = useState(0);

  <ProductFilters />;

  const addToCartHandler = (existingProductList, itemsInCart, productId) => {
    showNotification("Added to Cart");

    const updatedCartList = updateCart(
      existingProductList,
      itemsInCart,
      productId,
      "ADD"
    );

    const currentProduct = existingProductList.find(
      (item) => item._id === productId
    );
    const currentProductPrice = parseFloat(currentProduct.price);
    setCartCount((count) => count + 1);
    setCartPrice((price) => price + currentProductPrice);
    setItemsInCart(updatedCartList);
  };

  const addToWishlistHandler = (existingProductList, productId) => {
    showNotification("Added to Wishlist");
    const updatedWishlist = updateWishlist(
      existingProductList,
      itemsInWishlist,
      productId,
      "ADD"
    );
    setItemsInWishlist(updatedWishlist);
  };

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
      <div className="h-auto w-100 flex flex-row-wrap mg-tb-1 mg-r-2">
        {filteredData.map(
          ({ _id, name, image, price, rating, inStock, fastDelivery }) => (
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
                <p className="txt-l txt-700 txt-blue mg-tb-025 price-blue">
                  Rs. {price}
                </p>
                <p className="mg-tb-05">{addRatingStars(rating)}</p>
                {fastDelivery && (
                  <span className="badge-tl txt-500 pd-05 txt-s bdr-rad-round">
                    <BsLightningFill size={20} className="txt-yellow" />
                  </span>
                )}
                <div id="cont-fluid w-100">
                  {inStock ? (
                    <button
                      className="product-button pd-05 mg-05 bdr-none bdr-rad-m btn fill-button-blue txt-black"
                      onClick={() =>
                        addToCartHandler(filteredData, itemsInCart, _id)
                      }
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <button className="product-button pd-05 mg-05 bdr-none bdr-rad-m btn fill-button-blue txt-black">
                      Out of Stock
                    </button>
                  )}
                  <button
                    className="product-button pd-05 mg-05 bdr-thick bdr-blue bdr-rad-m btn fill-button-black txt-white"
                    onClick={() => addToWishlistHandler(filteredData, _id)}
                  >
                    Add to Wishlist
                  </button>
                </div>
                <br />
                <Link
                  id="view-details"
                  className="txt-black"
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
