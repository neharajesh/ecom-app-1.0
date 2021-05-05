import { useCart } from "../../context/cart-context";
import { updateCart } from "../Utilities/cart-utilities";
import { showNotification } from "../Utilities/toast";

export const AddToCart = ({ buttonVal, existingProductList, productId }) => {
  const { setCartCount, setCartPrice, itemsInCart, setItemsInCart } = useCart();

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

  return (
    <>
      <button
        className="product-button pd-05 mg-05 bdr-none bdr-rad-m btn fill-button-blue txt-black"
        onClick={() =>
          addToCartHandler(existingProductList, itemsInCart, productId)
        }
      >
        {buttonVal ? { buttonVal } : "Add to Cart"}
      </button>
    </>
  );
};
