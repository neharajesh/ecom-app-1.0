import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import ROOT_URL from "../config";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState();

  const loadCategoriesList = async () => {
    try {
      const response = await axios.get(`${ROOT_URL}/categories`);
      localStorage.setItem("categoriesList", categoryList);
      setCategoryList(response.data);
    } catch (err) {
      console.log(
        "Error occurred while retriving category list -",
        err.message
      );
    }
  };

  // eslint-disable-next-line
  useEffect(() => {
    loadCategoriesList();
  }, [setCategoryList]);

  return (
    <>
      <CategoryContext.Provider value={{ categoryList }}>
        {children}
      </CategoryContext.Provider>
    </>
  );
};

export const useCategory = () => {
  return useContext(CategoryContext);
};
