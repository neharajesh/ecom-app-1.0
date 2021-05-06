import { showNotification } from "../Utilities/toast";
import { updateWishlist } from "../Utilities/wishlist-utilities";
import { useWishlist } from "../../context/wishlist-context";
import "../../styles.css";

export const AddToWishlist = ({ existingProductList, productId }) => {
  const { itemsInWishlist, setItemsInWishlist } = useWishlist();
  const addToWishlistHandler = (existingProductList, productId) => {
    showNotification("Added to Wishlist");
    const updatedWishlist = updateWishlist(
      existingProductList,
      itemsInWishlist,
      productId,
      "ADD"
    );
    setItemsInWishlist(updatedWishlist);
    localStorage.setItem("wishlist", updatedWishlist);
  };

  return (
    <>
      <button
        className="product-button pd-05 mg-05 bdr-thick bdr-blue bdr-rad-m btn fill-button-black txt-white"
        onClick={() => addToWishlistHandler(existingProductList, productId)}
      >
        Add to Wishlist
      </button>
    </>
  );
};
