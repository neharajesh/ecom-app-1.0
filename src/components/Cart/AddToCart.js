import { useCart } from "../../context/cart-context";
import { updateCart } from "../Utilities/cart-utilities";
import { showNotification } from "../Utilities/toast";

export const AddToCart = ({ buttonVal, existingProductList, productId }) => {
  const {
    cartCount,
    setCartCount,
    cartPrice,
    setCartPrice,
    itemsInCart,
    setItemsInCart,
  } = useCart();

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
    const updatedCartPrice = cartPrice + currentProductPrice;
    const updatedCartCount = cartCount + 1;
    setCartCount(updatedCartCount);
    setCartPrice(updatedCartPrice);
    setItemsInCart(updatedCartList);
    localStorage.setItem("cart", JSON.stringify(updatedCartList));
    localStorage.setItem("cartCount", JSON.stringify(updatedCartPrice));
    localStorage.setItem("cartPrice", JSON.stringify(updatedCartCount));
  };

  return (
    <>
      <button
        className="product-button pd-05 mg-05 bdr-none bdr-rad-m btn fill-button-blue txt-black"
        onClick={() =>
          addToCartHandler(existingProductList, itemsInCart, productId)
        }
      >
        {buttonVal}
      </button>
    </>
  );
};
