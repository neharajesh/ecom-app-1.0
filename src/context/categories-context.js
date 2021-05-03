import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState();

  console.log("inside categories context");

  const loadCategoriesList = async () => {
    try {
      const response = await axios.get(
        "https://ecommerce-application-backend.neharajesh.repl.co/categories"
      );
      console.log(response, "inside categories context");
      setCategories(response.data);
    } catch (err) {
      console.log(
        "Error occurred while retriving category list -",
        err.message
      );
    }
  };

  useEffect(() => {
    loadCategoriesList();
  }, [setCategories]);

  return (
    <>
      <CategoryContext.Provider value={{ categories }}>
        {children}
      </CategoryContext.Provider>
    </>
  );
};

export const useCategory = () => {
  return useContext(CategoryContext);
};
