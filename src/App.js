import { Route, Routes } from "react-router";
import { Layout } from "./Layout/Layout";
import "./styles.css";
import { Home } from "./components/Home/Home";
import { Products } from "./components/Products/Products";
import { Cart } from "./components/Cart/Cart";
import { Wishlist } from "./components/Wishlist/Wishlist";
import { ProductDetails } from "./components/Products/ProductDetails";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/products">
          <Layout>
            <Products />
          </Layout>
        </Route>
        <Route path="/cart">
          <Layout>
            <Cart />
          </Layout>
        </Route>
        <Route path="/wishlist">
          <Layout>
            <Wishlist />
          </Layout>
        </Route>
        <Route path="/products/:productId">
          <Layout>
            <ProductDetails />
          </Layout>
        </Route>
        <Route path="/auth/signin">
          <Layout>
            <Login />
          </Layout>
        </Route>
        <Route path="/auth/signup">
          <Layout>
            <Register />
          </Layout>
        </Route>
      </Routes>
    </>
  );
};

export default App;
