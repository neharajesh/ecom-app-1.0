import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import ROOT_URL from "../config";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const loadProductList = async () => {
    try {
      const response = await axios.get(`${ROOT_URL}/products`);
      setProductList(response.data);
    } catch (err) {
      console.log("Error Occurred => ", err.message);
    }
  };

  useEffect(() => {
    loadProductList();
  }, [setProductList]);

  return (
    <>
      <ProductContext.Provider value={{ productList }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
