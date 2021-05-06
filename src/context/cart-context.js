import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const storedCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const storedCartCount = localStorage.getItem("cartCount")
  ? JSON.parse(localStorage.getItem("cartCount"))
  : 0;
const storedCartPrice = localStorage.getItem("cartPrice")
  ? JSON.parse(localStorage.getItem("cartPrice"))
  : 0;

export const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState(storedCart);
  const [cartPrice, setCartPrice] = useState(storedCartCount);
  const [cartCount, setCartCount] = useState(storedCartPrice);

  return (
    <>
      <CartContext.Provider
        value={{
          cartCount,
          setCartCount,
          cartPrice,
          setCartPrice,
          itemsInCart,
          setItemsInCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
