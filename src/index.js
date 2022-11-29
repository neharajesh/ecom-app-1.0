import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "context/product-context";
import { CartProvider } from "context/cart-context";
import { WishlistProvider } from "context/wishlist-context";
import { OffersProvider } from "context/offers-context";
import { UserProvider } from "context/user-context";
import { ThemeProvider } from "context/theme-context";
import { AddressProvider } from "context/address-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <UserProvider>
          <AddressProvider>
            <OffersProvider>
              <ProductProvider>
                <CartProvider>
                  <WishlistProvider>
                    <App />
                  </WishlistProvider>
                </CartProvider>
              </ProductProvider>
            </OffersProvider>
          </AddressProvider>
        </UserProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
