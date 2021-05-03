import { showNotification } from "../Utilities/toast";
import { updateWishlist } from "../Utilities/wishlist-utilities";
import { useProduct } from "../../context/product-context";
import { useWishlist } from "../../context/wishlist-context";

export const RemoveFromWishlist = ({ itemId }) => {
  const { itemsInWishlist, setItemsInWishlist } = useWishlist();
  const { productList } = useProduct();

  const removeFromWishlist = (currentList, itemId) => {
    showNotification("Removed from Wishlist");
    const updatedWishlist = updateWishlist(
      productList,
      currentList,
      itemId,
      "REMOVE"
    );
    setItemsInWishlist(updatedWishlist);
  };
  return (
    <>
      <button
        className="pd-05 mg-1 bdr-thick bdr-blue bdr-rad-m btn btn-secondary-blue card-w-10"
        onClick={() => removeFromWishlist(itemsInWishlist, itemId)}
      >
        Remove
      </button>
    </>
  );
};
