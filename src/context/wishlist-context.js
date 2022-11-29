import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

const savedWishlist = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

export const WishlistProvider = ({ children }) => {
  const [itemsInWishlist, setItemsInWishlist] = useState(savedWishlist);
  return (
    <>
      <WishlistContext.Provider value={{ itemsInWishlist, setItemsInWishlist }}>
        {children}
      </WishlistContext.Provider>
    </>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
