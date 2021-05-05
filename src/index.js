import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/product-context";
import { CartProvider } from "./context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";
import { OffersProvider } from "./context/offers-context";
import { CategoryProvider } from "./context/categories-context";
import { AuthProvider } from "./auth/auth-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CategoryProvider>
          <OffersProvider>
            <ProductProvider>
              <CartProvider>
                <WishlistProvider>
                  <App />
                </WishlistProvider>
              </CartProvider>
            </ProductProvider>
          </OffersProvider>
        </CategoryProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
