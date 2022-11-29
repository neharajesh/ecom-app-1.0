import React from "react";
import { useCart } from "context/cart-context";
import { updateCart } from "../Utilities/cart-utilities";
import { showNotification } from "../Utilities/toast";

export const RemoveFromCart = ({
  buttonVal,
  existingProductList,
  productId,
}) => {
  const {
    cartCount,
    cartPrice,
    setCartCount,
    setCartPrice,
    itemsInCart,
    setItemsInCart,
  } = useCart();

  const removeFromCartHandler = (
    existingProductList,
    itemsInCart,
    productId
  ) => {
    showNotification("Removed from Cart");

    const updatedCartList = updateCart(
      existingProductList,
      itemsInCart,
      productId,
      "REMOVE"
    );

    const currentProduct = existingProductList.find(
      (item) => item._id === productId
    );
    const currentProductPrice = parseFloat(currentProduct.price);
    const currentCartCount = cartCount - 1;
    const currentCartPrice = cartPrice - currentProductPrice;
    setCartCount(currentCartCount);
    setCartPrice(currentCartPrice);
    setItemsInCart(updatedCartList);
    localStorage.setItem("cart", JSON.stringify(updatedCartList));
    localStorage.setItem("cartCount", JSON.stringify(currentCartCount));
    localStorage.setItem("cartPrice", JSON.stringify(currentCartPrice));
  };
  return (
    <>
      <button
        className="product-button pd-05 mg-05 bdr-none bdr-rad-m btn fill-button-blue txt-black"
        onClick={() =>
          removeFromCartHandler(existingProductList, itemsInCart, productId)
        }
      >
        {buttonVal}
      </button>
    </>
  );
};
