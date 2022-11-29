import React, { createContext, useContext, useState } from "react";

const AddressContext = createContext();

let initialAddresses = localStorage.getItem("address")
  ? JSON.parse(localStorage.getItem("address"))
  : [];

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState(initialAddresses);
  return (
    <>
      <AddressContext.Provider value={{ addresses, setAddresses }}>
        {children}
      </AddressContext.Provider>
    </>
  );
};

export const useAddress = () => {
  return useContext(AddressContext);
};
