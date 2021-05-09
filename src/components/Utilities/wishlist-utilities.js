import { showNotification } from "./toast";

export const updateWishlist = (
  productItems,
  wishlistItems,
  itemToUpdateId,
  action
) => {
  let itemExistsInWishlist = wishlistItems.find(
    (item) => item._id === itemToUpdateId
  );

  if (action === "ADD") {
    if (itemExistsInWishlist === undefined) {
      let selectedItem = productItems.find(
        (item) => item._id === itemToUpdateId
      );
      const updatedWishlist = [...wishlistItems, selectedItem];
      return updatedWishlist;
    } else {
      showNotification("Item already in Wishlist!");
      return wishlistItems;
    }
  } else if (action === "REMOVE") {
    if (itemExistsInWishlist !== undefined) {
      const updatedWishlist = wishlistItems.filter(
        (item) => item._id !== itemToUpdateId
      );
      return updatedWishlist;
    }
  }
};
